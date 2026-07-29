import { useEffect, useState } from "react";
import AdminGate, { getStoredAdminSecret } from "../components/AdminGate";

async function callAdmin(action, payload) {
  const res = await fetch("/.netlify/functions/admin-data", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ adminSecret: getStoredAdminSecret(), action, payload }),
  });
  return res.json();
}

function QuestionCard({ q, onResponded }) {
  const [reply, setReply] = useState(q.response || "");
  const [saving, setSaving] = useState(false);

  async function handleSend() {
    setSaving(true);
    await callAdmin("respond-question", { questionId: q.id, response: reply });
    setSaving(false);
    onResponded();
  }

  return (
    <div className="card" style={{ opacity: q.resolved && !q.response ? 0.55 : 1 }}>
      <p className="unit-label">{q.context}</p>
      <p style={{ fontWeight: 500 }}>{q.question}</p>
      <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>From: {q.studentName}</p>

      {q.response && (
        <div className="card gold-edge" style={{ marginBottom: "0.8rem" }}>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--muted)" }}>Your reply (visible to the player):</p>
          <p style={{ margin: 0 }}>{q.response}</p>
        </div>
      )}

      <label>
        {q.response ? "Update your reply" : "Reply to this player"}
        <textarea rows={3} value={reply} onChange={(e) => setReply(e.target.value)} />
      </label>
      <button onClick={handleSend} disabled={saving || !reply.trim()}>
        {saving ? "Sending..." : q.response ? "Update Reply" : "Send Reply"}
      </button>
    </div>
  );
}

export default function AdminQuestionsPage() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showResolved, setShowResolved] = useState(false);

  async function load() {
    setLoading(true);
    const res = await callAdmin("list-questions");
    setQuestions(res.questions || []);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  const visible = questions.filter((q) => showResolved || !q.response);

  return (
    <AdminGate>
      <div className="admin-roster">
        <h1>Player Questions</h1>
        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <input
            type="checkbox"
            style={{ width: "auto", minHeight: "auto" }}
            checked={showResolved}
            onChange={(e) => setShowResolved(e.target.checked)}
          />
          Show questions you've already answered
        </label>

        {loading && <p>Loading...</p>}
        {!loading && visible.length === 0 && <p>No questions right now.</p>}
        {visible.map((q) => (
          <QuestionCard key={q.id} q={q} onResponded={load} />
        ))}
      </div>
    </AdminGate>
  );
}
