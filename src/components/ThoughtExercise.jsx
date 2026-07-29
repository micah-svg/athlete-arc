import { useState } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "../lib/AuthContext";

/**
 * Open-ended reflection, no rating scale. Used for IQ/strategy modules
 * where the point is thinking it through, not scoring a skill level.
 */
export default function ThoughtExercise({ moduleId, prompt }) {
  const { user } = useAuth();
  const [response, setResponse] = useState("");
  const [saved, setSaved] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    await setDoc(
      doc(db, "submissions", `${user.uid}_${moduleId}_thought`),
      {
        studentId: user.uid,
        moduleId,
        type: "thoughtExercise",
        response,
        submittedAt: serverTimestamp(),
      },
      { merge: true }
    );
    setSaved(true);
  }

  if (saved) {
    return <p className="saved-confirmation">Saved. Coach Micah may follow up on this in practice.</p>;
  }

  return (
    <form className="thought-exercise" onSubmit={handleSubmit}>
      <p className="prompt">{prompt}</p>
      <textarea
        rows={4}
        value={response}
        onChange={(e) => setResponse(e.target.value)}
        placeholder="Type your answer here..."
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
