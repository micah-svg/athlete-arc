import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "../lib/AuthContext";

export default function MyQuestionsPage() {
  const { user } = useAuth();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const q = query(collection(db, "questions"), where("studentId", "==", user.uid));
      const snap = await getDocs(q);
      const docs = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      // Sort client-side (newest first) rather than in the query, avoids
      // needing a composite Firestore index for studentId + submittedAt.
      docs.sort((a, b) => (b.submittedAt?.seconds || 0) - (a.submittedAt?.seconds || 0));
      setQuestions(docs);
      setLoading(false);
    })();
  }, [user.uid]);

  return (
    <div className="dashboard-page">
      <h1>My Questions</h1>
      {loading && <p>Loading...</p>}
      {!loading && questions.length === 0 && <p>You haven't asked anything yet. Use the "Ask a Question" button anytime.</p>}
      {questions.map((q) => (
        <div key={q.id} className="card">
          <p className="unit-label">{q.context}</p>
          <p style={{ fontWeight: 500 }}>{q.question}</p>
          {q.response ? (
            <div className="card gold-edge" style={{ marginTop: "0.6rem" }}>
              <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--muted)" }}>Coach Micah replied:</p>
              <p style={{ margin: 0 }}>{q.response}</p>
            </div>
          ) : (
            <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Coach Micah hasn't answered yet.</p>
          )}
        </div>
      ))}
    </div>
  );
}
