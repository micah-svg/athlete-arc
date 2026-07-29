import { useEffect, useState } from "react";
import AdminGate, { getStoredAdminSecret } from "../components/AdminGate";
import { allModulesById } from "../data/course-structure";

async function callAdmin(action, payload) {
  const res = await fetch("/.netlify/functions/admin-data", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ adminSecret: getStoredAdminSecret(), action, payload }),
  });
  return res.json();
}

function SubmissionCard({ submission }) {
  const moduleTitle = allModulesById[submission.moduleId]?.title || submission.moduleId;

  return (
    <div className="card">
      <p className="unit-label">{moduleTitle}</p>
      {submission.type === "comprehension" && (
        <p><strong>Self-rated understanding:</strong> {submission.label} ({submission.level}/4)</p>
      )}
      {submission.type === "quiz" && (
        <p><strong>Quiz score:</strong> {submission.score}/{submission.total}</p>
      )}
      {submission.type === "thoughtExercise" && (
        <>
          <p><strong>Thought exercise response:</strong></p>
          <p>{submission.response}</p>
        </>
      )}
      {submission.type === "smartGoal" && (
        <>
          <p><strong>SMART goal:</strong></p>
          <p>Specific: {submission.specific}</p>
          <p>Measurable: {submission.measurable}</p>
          <p>Achievable: {submission.achievable}</p>
          <p>Relevant: {submission.relevant}</p>
          <p>Time-based: {submission.timeBased}</p>
        </>
      )}
      {submission.type === "weeklyPlan" && (
        <>
          <p><strong>Weekly plan:</strong></p>
          {Object.entries(submission.plan || {}).map(([day, info]) => (
            <p key={day}>{day}: {info.type} {info.homeworkBlock ? `— homework: ${info.homeworkBlock}` : ""}</p>
          ))}
        </>
      )}
      {!submission.type && submission.rating !== undefined && (
        <>
          <p><strong>Self-rating ({submission.skillLabel}):</strong> {submission.rating}/5</p>
          <p>{submission.reflection}</p>
        </>
      )}
    </div>
  );
}

export default function AdminResponseReviewPage() {
  const [students, setStudents] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const s = await callAdmin("list-students");
      const sub = await callAdmin("list-submissions");
      setStudents(s.students || []);
      setSubmissions(sub.submissions || []);
      setLoading(false);
    })();
  }, []);

  if (loading) return <p>Loading responses...</p>;

  const studentSubmissions = selectedStudent
    ? submissions.filter((s) => s.studentId === selectedStudent)
    : [];

  return (
    <AdminGate>
      <div className="admin-roster">
        <h1>Review Responses</h1>

        {!selectedStudent ? (
          <ul className="module-list">
            {students.map((s) => (
              <li key={s.uid}>
                <button className="module-list-item" style={{ width: "100%" }} onClick={() => setSelectedStudent(s.uid)}>
                  {s.displayName || s.username}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <button onClick={() => setSelectedStudent(null)}>← Back to player list</button>
            {studentSubmissions.length === 0 && <p>No submissions yet for this player.</p>}
            {studentSubmissions.map((sub) => (
              <SubmissionCard key={sub.id} submission={sub} />
            ))}
          </>
        )}
      </div>
    </AdminGate>
  );
}
