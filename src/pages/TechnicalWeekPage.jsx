import { useState } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "../lib/AuthContext";
import VideoLesson from "../components/VideoLesson";
import ScenarioQuiz from "../components/ScenarioQuiz";
import SelfAssessmentForm from "../components/SelfAssessmentForm";

export default function TechnicalWeekPage({ week }) {
  const { user } = useAuth();
  const [quizDone, setQuizDone] = useState(false);

  async function handleQuizComplete({ score, total, answers }) {
    await setDoc(
      doc(db, "submissions", `${user.uid}_${week.id}_prework_quiz`),
      {
        studentId: user.uid,
        moduleId: week.id,
        type: "quiz",
        score,
        total,
        answers,
        submittedAt: serverTimestamp(),
      },
      { merge: true }
    );
    setQuizDone(true);
  }

  return (
    <div className="module-page">
      <p className="unit-label">Technical Track</p>
      <h1>{week.title}</h1>

      <h2>Pre-Work</h2>
      <VideoLesson youtubeId={week.preWork.video.youtubeId} title={week.preWork.video.title} />

      {!quizDone ? (
        <ScenarioQuiz questions={week.preWork.quiz.questions} onComplete={handleQuizComplete} />
      ) : (
        <p className="saved-confirmation">Quiz complete and saved.</p>
      )}

      <SelfAssessmentForm
        moduleId={`${week.id}_prework`}
        skillLabel={week.preWork.selfAssessment.skillLabel}
        prompt={week.preWork.selfAssessment.prompt}
      />

      <h2>Post-Work</h2>
      <p>Fill this out after that week's practices.</p>
      <SelfAssessmentForm
        moduleId={`${week.id}_postwork`}
        skillLabel={week.postWork.selfAssessment.skillLabel}
        prompt={week.postWork.selfAssessment.prompt}
      />
    </div>
  );
}
