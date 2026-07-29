import { useState } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "../lib/AuthContext";

/**
 * Generic self-rating + reflection form, reused for weekly technical
 * pre/post work, goal setting, etc. Ratings are always self vs. self
 * (compared to this student's own prior week), never a team leaderboard.
 */
export default function SelfAssessmentForm({ moduleId, skillLabel, prompt }) {
  const { user } = useAuth();
  const [rating, setRating] = useState(3);
  const [reflection, setReflection] = useState("");
  const [saved, setSaved] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    await setDoc(
      doc(db, "submissions", `${user.uid}_${moduleId}`),
      {
        studentId: user.uid,
        moduleId,
        skillLabel,
        rating,
        reflection,
        submittedAt: serverTimestamp(),
      },
      { merge: true }
    );
    setSaved(true);
  }

  if (saved) {
    return <p className="saved-confirmation">Saved. Nice work.</p>;
  }

  return (
    <form className="self-assessment-form" onSubmit={handleSubmit}>
      <p className="prompt">{prompt}</p>

      <label>
        Rate your {skillLabel} today (1 = still learning it, 5 = locked in)
        <input
          type="range"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
        <span className="rating-value">{rating}</span>
      </label>

      <label>
        One thing you noticed or want to work on
        <textarea
          rows={3}
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
