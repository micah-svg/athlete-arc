import { useState } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "../lib/AuthContext";

/**
 * Structured SMART goal form (Specific, Measurable, Achievable, Relevant,
 * Time-Based) — a different form type than SelfAssessmentForm's slider,
 * used where the point is building an actual, checkable goal statement.
 */
export default function GoalSettingForm({ moduleId }) {
  const { user } = useAuth();
  const [fields, setFields] = useState({
    specific: "",
    measurable: "",
    achievable: "",
    relevant: "",
    timeBased: "",
  });
  const [saved, setSaved] = useState(false);

  function update(key, value) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await setDoc(
      doc(db, "submissions", `${user.uid}_${moduleId}_goal`),
      {
        studentId: user.uid,
        moduleId,
        type: "smartGoal",
        ...fields,
        submittedAt: serverTimestamp(),
      },
      { merge: true }
    );
    setSaved(true);
  }

  if (saved) {
    return <p className="saved-confirmation">Goal saved. We'll check in on this later in the season.</p>;
  }

  return (
    <form className="goal-setting-form" onSubmit={handleSubmit}>
      <label>
        Specific — what exactly do you want to improve?
        <textarea rows={2} value={fields.specific} onChange={(e) => update("specific", e.target.value)} required />
      </label>
      <label>
        Measurable — how will you know it's working? (a number, a stat, a clear yes/no)
        <textarea rows={2} value={fields.measurable} onChange={(e) => update("measurable", e.target.value)} required />
      </label>
      <label>
        Achievable — why is this realistic for you this season?
        <textarea rows={2} value={fields.achievable} onChange={(e) => update("achievable", e.target.value)} required />
      </label>
      <label>
        Relevant — why does this goal actually matter to you?
        <textarea rows={2} value={fields.relevant} onChange={(e) => update("relevant", e.target.value)} required />
      </label>
      <label>
        Time-Based — by when? (a specific week or date this season)
        <input type="text" value={fields.timeBased} onChange={(e) => update("timeBased", e.target.value)} required />
      </label>
      <button type="submit">Save My Goal</button>
    </form>
  );
}
