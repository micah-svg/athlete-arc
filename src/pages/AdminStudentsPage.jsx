import { useEffect, useState } from "react";
import AdminGate, { getStoredAdminSecret } from "../components/AdminGate";

async function callAdmin(action, payload) {
  const res = await fetch("/.netlify/functions/admin-data", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ adminSecret: getStoredAdminSecret(), action, payload }),
  });
  if (!res.ok) throw new Error(await res.text().catch(() => "Request failed"));
  return res.json();
}

function StudentRow({ student, onReset }) {
  const [resetting, setResetting] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [status, setStatus] = useState("");

  async function handleReset(e) {
    e.preventDefault();
    setStatus("Saving...");
    try {
      await callAdmin("reset-password", { uid: student.uid, newPassword });
      setStatus("Password updated.");
      setNewPassword("");
      setResetting(false);
      onReset?.();
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    }
  }

  return (
    <div className="card">
      <p style={{ fontWeight: 700, margin: 0 }}>{student.displayName}</p>
      <p style={{ color: "var(--muted)", margin: "0.2rem 0 0.6rem" }}>Username: {student.username}</p>

      {!resetting ? (
        <button onClick={() => setResetting(true)}>Reset Password</button>
      ) : (
        <form onSubmit={handleReset}>
          <label>
            New password for {student.displayName}
            <input
              type="text"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Type a new password"
              required
            />
          </label>
          <div style={{ display: "flex", gap: "0.6rem" }}>
            <button type="submit">Save New Password</button>
            <button
              type="button"
              onClick={() => { setResetting(false); setStatus(""); }}
              style={{ background: "transparent", border: "1px solid var(--line)", color: "var(--muted)" }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
      {status && <p style={{ fontSize: "0.85rem" }}>{status}</p>}
    </div>
  );
}

export default function AdminStudentsPage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  async function load() {
    setLoading(true);
    const res = await callAdmin("list-students");
    setStudents(res.students || []);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  const visible = students.filter((s) =>
    (s.displayName || "").toLowerCase().includes(search.toLowerCase()) ||
    (s.username || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminGate>
      <div className="admin-roster">
        <h1>Students</h1>

        <div className="card gold-edge">
          <p style={{ margin: 0 }}>
            Passwords can't be viewed once an account is created, Firebase never stores them in a
            retrievable form, only you setting them at creation time knows what they were. If a
            player forgets theirs, use Reset Password below to set a new one on the spot.
          </p>
        </div>

        <label>
          Search by name or username
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
        </label>

        {loading && <p>Loading...</p>}
        {!loading && visible.length === 0 && <p>No students found.</p>}
        {visible.map((s) => (
          <StudentRow key={s.uid} student={s} onReset={load} />
        ))}
      </div>
    </AdminGate>
  );
}
