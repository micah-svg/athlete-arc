import { useState } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "../lib/AuthContext";

const LEVELS = [
  { level: 1, label: "Still lost", sub: "I don't really get this yet" },
  { level: 2, label: "Kind of get it", sub: "I could explain part of it" },
  { level: 3, label: "Pretty confident", sub: "I get it, might mix up small details" },
  { level: 4, label: "I could teach this to someone else", sub: "I really get it" },
];

export default function ComprehensionCheck({ moduleId }) {
  const { user } = useAuth();
  const [saved, setSaved] = useState(false);

  async function handlePick(level, label) {
    await setDoc(
      doc(db, "submissions", `${user.uid}_${moduleId}_comprehension`),
      {
        studentId: user.uid,
        moduleId,
        type: "comprehension",
        level,
        label,
        submittedAt: serverTimestamp(),
      },
      { merge: true }
    );
    setSaved(true);
  }

  if (saved) {
    return <p className="saved-confirmation">Thanks, saved.</p>;
  }

  return (
    <div className="comprehension-check">
      <p className="prompt">Be honest, how well do you feel like you get this material?</p>
      <div className="comprehension-options">
        {LEVELS.map((l) => (
          <button
            key={l.level}
            className="comprehension-option"
            onClick={() => handlePick(l.level, l.label)}
          >
            <span className="comprehension-label">{l.label}</span>
            <span className="comprehension-sub">{l.sub}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
