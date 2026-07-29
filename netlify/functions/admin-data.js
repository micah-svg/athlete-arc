// Netlify Function: admin-data
//
// One function, several actions, all gated by the same ADMIN_SECRET used for
// account creation. This runs server-side with the Admin SDK, so it can read
// data that Firestore rules otherwise restrict per-student (submissions,
// roster) and write to the modules collection that rules make read-only
// from the client.
//
// actions:
//   "list-students"    -> all student profiles
//   "list-submissions" -> all quiz/form submissions, every student
//   "save-module"      -> upsert a module's editable content

const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON)
    ),
  });
}

const db = admin.firestore();

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const { adminSecret, action, payload } = JSON.parse(event.body || "{}");

  if (adminSecret !== process.env.ADMIN_SECRET) {
    return { statusCode: 401, body: "Unauthorized" };
  }

  try {
    if (action === "list-students") {
      const snap = await db.collection("students").get();
      const students = snap.docs.map((d) => ({ uid: d.id, ...d.data() }));
      return { statusCode: 200, body: JSON.stringify({ students }) };
    }

    if (action === "reset-password") {
      const { uid, newPassword } = payload;
      if (!uid || !newPassword) {
        return { statusCode: 400, body: "uid and newPassword are required" };
      }
      await admin.auth().updateUser(uid, { password: newPassword });
      return { statusCode: 200, body: JSON.stringify({ status: "password-reset" }) };
    }

    if (action === "list-submissions") {
      const snap = await db.collection("submissions").get();
      const submissions = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      return { statusCode: 200, body: JSON.stringify({ submissions }) };
    }

    if (action === "get-module") {
      const { moduleId } = payload;
      const snap = await db.collection("modules").doc(moduleId).get();
      return { statusCode: 200, body: JSON.stringify({ content: snap.exists ? snap.data() : null }) };
    }

    if (action === "save-module") {
      const { moduleId, content } = payload;
      if (!moduleId || !content) {
        return { statusCode: 400, body: "moduleId and content are required" };
      }
      await db.collection("modules").doc(moduleId).set(
        { ...content, updatedAt: admin.firestore.FieldValue.serverTimestamp() },
        { merge: true }
      );
      return { statusCode: 200, body: JSON.stringify({ status: "saved" }) };
    }

    if (action === "list-questions") {
      const snap = await db.collection("questions").orderBy("submittedAt", "desc").get();
      const questions = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      return { statusCode: 200, body: JSON.stringify({ questions }) };
    }

    if (action === "resolve-question") {
      const { questionId, resolved } = payload;
      await db.collection("questions").doc(questionId).set({ resolved }, { merge: true });
      return { statusCode: 200, body: JSON.stringify({ status: "updated" }) };
    }

    if (action === "respond-question") {
      const { questionId, response } = payload;
      if (!questionId || !response) {
        return { statusCode: 400, body: "questionId and response are required" };
      }
      await db.collection("questions").doc(questionId).set(
        {
          response,
          respondedAt: admin.firestore.FieldValue.serverTimestamp(),
          resolved: true,
        },
        { merge: true }
      );
      return { statusCode: 200, body: JSON.stringify({ status: "responded" }) };
    }

    if (action === "list-resources") {
      const snap = await db.collection("resources").orderBy("createdAt", "desc").get();
      const resources = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      return { statusCode: 200, body: JSON.stringify({ resources }) };
    }

    if (action === "save-resource") {
      const { resourceId, title, url, notes, category } = payload;
      const data = {
        title: title || "",
        url: url || "",
        notes: notes || "",
        category: category || "General",
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      };
      if (resourceId) {
        await db.collection("resources").doc(resourceId).set(data, { merge: true });
        return { statusCode: 200, body: JSON.stringify({ status: "updated", resourceId }) };
      } else {
        data.createdAt = admin.firestore.FieldValue.serverTimestamp();
        const ref = await db.collection("resources").add(data);
        return { statusCode: 200, body: JSON.stringify({ status: "created", resourceId: ref.id }) };
      }
    }

    if (action === "delete-resource") {
      const { resourceId } = payload;
      await db.collection("resources").doc(resourceId).delete();
      return { statusCode: 200, body: JSON.stringify({ status: "deleted" }) };
    }

    return { statusCode: 400, body: "Unknown action" };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
