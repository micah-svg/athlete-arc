import { useState } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "../lib/AuthContext";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

/**
 * Day-by-day weekly template builder — a third distinct form type, used
 * for building a real, personal artifact (their actual week) rather than
 * rating a skill or defining a goal.
 */
export default function WeeklyPlannerForm({ moduleId }) {
  const { user } = useAuth();
  const [plan, setPlan] = useState(
    Object.fromEntries(DAYS.map((d) => [d, { type: "practice", homeworkBlock: "" }]))
  );
  const [saved, setSaved] = useState(false);

  function updateDay(day, key, value) {
    setPlan((prev) => ({ ...prev, [day]: { ...prev[day], [key]: value } }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await setDoc(
      doc(db, "submissions", `${user.uid}_${moduleId}_weeklyplan`),
      {
        studentId: user.uid,
        moduleId,
        type: "weeklyPlan",
        plan,
        submittedAt: serverTimestamp(),
      },
      { merge: true }
    );
    setSaved(true);
  }

  if (saved) {
    return <p className="saved-confirmation">Weekly plan saved.</p>;
  }

  return (
    <form className="weekly-planner-form" onSubmit={handleSubmit}>
      {DAYS.map((day) => (
        <div key={day} className="day-row">
          <span className="day-label">{day}</span>
          <select
            value={plan[day].type}
            onChange={(e) => updateDay(day, "type", e.target.value)}
          >
            <option value="practice">Practice day</option>
            <option value="match">Match day</option>
            <option value="off">Off day</option>
          </select>
          <input
            type="text"
            placeholder="When will homework happen? (leave blank if match day)"
            value={plan[day].homeworkBlock}
            onChange={(e) => updateDay(day, "homeworkBlock", e.target.value)}
          />
        </div>
      ))}
      <button type="submit">Save My Week</button>
    </form>
  );
}
