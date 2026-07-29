import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "../lib/AuthContext";
import { allModulesById } from "../data/course-structure";

const ROUTE_LABELS = {
  "/": "Dashboard",
};

function getContextLabel(pathname) {
  if (ROUTE_LABELS[pathname]) return ROUTE_LABELS[pathname];
  const moduleMatch = pathname.match(/^\/module\/(.+)$/);
  if (moduleMatch) {
    const mod = allModulesById[moduleMatch[1]];
    return mod ? `${mod.unit} — ${mod.title}` : `Module: ${moduleMatch[1]}`;
  }
  return pathname;
}

export default function AskQuestionButton() {
  const { user, profile } = useAuth();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [sent, setSent] = useState(false);

  if (!user) return null; // only show once a student is logged in

  async function handleSubmit(e) {
    e.preventDefault();
    await addDoc(collection(db, "questions"), {
      studentId: user.uid,
      studentName: profile?.displayName || "Unknown player",
      context: getContextLabel(location.pathname),
      path: location.pathname,
      question,
      resolved: false,
      submittedAt: serverTimestamp(),
    });
    setSent(true);
    setQuestion("");
  }

  function handleClose() {
    setOpen(false);
    setSent(false);
  }

  return (
    <>
      <button className="ask-question-fab" onClick={() => setOpen(true)} aria-label="Ask Coach Micah a question">
        ? Ask a Question
      </button>

      {open && (
        <div className="ask-question-overlay" onClick={handleClose}>
          <div className="ask-question-modal" onClick={(e) => e.stopPropagation()}>
            {!sent ? (
              <form onSubmit={handleSubmit}>
                <h2>Ask Coach Micah</h2>
                <p className="ask-question-context">
                  Sending from: <strong>{getContextLabel(location.pathname)}</strong>
                </p>
                <textarea
                  rows={4}
                  placeholder="What's your question?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  required
                  autoFocus
                />
                <div className="ask-question-actions">
                  <button type="button" className="ask-question-cancel" onClick={handleClose}>Cancel</button>
                  <button type="submit">Send</button>
                </div>
              </form>
            ) : (
              <>
                <h2>Sent</h2>
                <p>Coach Micah will see your question and what page you were on.</p>
                <p><Link to="/my-questions" onClick={handleClose}>See your past questions and replies →</Link></p>
                <button onClick={handleClose}>Close</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
