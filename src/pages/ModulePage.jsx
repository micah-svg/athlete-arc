import { useState } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "../lib/AuthContext";
import VideoLesson from "../components/VideoLesson";
import ScenarioQuiz from "../components/ScenarioQuiz";
import ThoughtExercise from "../components/ThoughtExercise";
import GoalSettingForm from "../components/GoalSettingForm";
import WeeklyPlannerForm from "../components/WeeklyPlannerForm";
import ComprehensionCheck from "../components/ComprehensionCheck";

/**
 * Generic renderer for any module: video -> quiz -> (thought exercise OR
 * goal-setting form OR weekly planner, whichever the module data specifies).
 * Reused across every unit and elective, content lives in the data files,
 * not in this component.
 *
 * Modules with a `certificationThreshold` (currently just E1) get scored
 * pass/fail feedback and unlimited retakes instead of a flat "done" message.
 */
export default function ModulePage({ module }) {
  const { user } = useAuth();
  const [quizDone, setQuizDone] = useState(false);
  const [lastResult, setLastResult] = useState(null); // { score, total }
  const [attempt, setAttempt] = useState(0); // bump to remount ScenarioQuiz for a clean retake

  const hasThreshold = typeof module.certificationThreshold === "number";

  async function handleQuizComplete({ score, total, answers }) {
    await setDoc(
      doc(db, "submissions", `${user.uid}_${module.id}_quiz`),
      {
        studentId: user.uid,
        moduleId: module.id,
        type: "quiz",
        score,
        total,
        answers,
        attempt: attempt + 1,
        submittedAt: serverTimestamp(),
      },
      { merge: true }
    );
    setLastResult({ score, total });
    setQuizDone(true);
  }

  function handleRetake() {
    setQuizDone(false);
    setLastResult(null);
    setAttempt((a) => a + 1);
  }

  const passed = hasThreshold && lastResult && lastResult.score / lastResult.total >= module.certificationThreshold;
  const failed = hasThreshold && lastResult && !passed;

  return (
    <div className="module-page">
      <p className="unit-label">{module.unit}</p>
      <h1>{module.title}</h1>

      <VideoLesson youtubeId={module.video.youtubeId} title={module.video.title} />

      <h2>Check Your Understanding</h2>
      {!quizDone ? (
        <ScenarioQuiz key={attempt} questions={module.quiz.questions} onComplete={handleQuizComplete} />
      ) : hasThreshold ? (
        <div className={`certification-result ${passed ? "passed" : "failed"}`}>
          <p className="certification-score">
            You scored {lastResult.score}/{lastResult.total} ({Math.round((lastResult.score / lastResult.total) * 100)}%)
          </p>
          {passed ? (
            <p className="saved-confirmation">Passed! You met the {Math.round(module.certificationThreshold * 100)}% requirement.</p>
          ) : (
            <>
              <p>
                You need {Math.round(module.certificationThreshold * 100)}% to pass. No penalty for retaking, take
                your time and try again whenever you're ready.
              </p>
              <button onClick={handleRetake}>Retake Quiz</button>
            </>
          )}
        </div>
      ) : (
        <p className="saved-confirmation">Quiz complete and saved.</p>
      )}

      {module.certificationNote && (
        <div className="certification-note">
          <p>{module.certificationNote}</p>
        </div>
      )}

      {module.goalSettingForm && (
        <>
          <h2>Set Your Goal</h2>
          <GoalSettingForm moduleId={module.id} />
        </>
      )}

      {module.weeklyPlannerForm && (
        <>
          <h2>Build Your Week</h2>
          <WeeklyPlannerForm moduleId={module.id} />
        </>
      )}

      {module.thoughtExercise && (
        <>
          <h2>Think It Through</h2>
          <ThoughtExercise moduleId={module.id} prompt={module.thoughtExercise.prompt} />
        </>
      )}

      <h2>How Well Do You Get It?</h2>
      <ComprehensionCheck moduleId={module.id} />
    </div>
  );
}
