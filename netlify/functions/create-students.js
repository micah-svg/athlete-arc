// Netlify Function: create-students
//
// This runs on Netlify's servers, never in the browser, so it's safe to use
// the Firebase Admin SDK here (which has full account-creation privileges).
//
// Protected by a shared secret (ADMIN_SECRET) that only Coach Micah knows,
// set as a Netlify environment variable, never committed to the repo.

const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON)
    ),
  });
}

const SYNTHETIC_DOMAIN = "athlete-arc.internal";

function usernameToSyntheticEmail(username) {
  const normalized = username.trim().toLowerCase().replace(/[^a-z0-9._-]/g, "");
  return `${normalized}@${SYNTHETIC_DOMAIN}`;
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const { adminSecret, roster } = JSON.parse(event.body || "{}");

  if (adminSecret !== process.env.ADMIN_SECRET) {
    return { statusCode: 401, body: "Unauthorized" };
  }

  if (!Array.isArray(roster) || roster.length === 0) {
    return { statusCode: 400, body: "roster must be a non-empty array" };
  }

  const results = [];

  for (const entry of roster) {
    const { displayName, username, password } = entry;
    const email = usernameToSyntheticEmail(username);

    try {
      const userRecord = await admin.auth().createUser({
        email,
        password,
        displayName,
      });

      await admin.firestore().collection("students").doc(userRecord.uid).set({
        displayName,
        username: username.trim().toLowerCase(),
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      results.push({ username, status: "created", uid: userRecord.uid });
    } catch (err) {
      results.push({ username, status: "error", message: err.message });
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ results }),
  };
};
