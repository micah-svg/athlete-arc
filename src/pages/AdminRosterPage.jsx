import { useState } from "react";

// Coach-only page. Not linked anywhere in student navigation; reach it directly
// at /admin-roster. For real protection beyond "nobody knows the URL," gate
// this route behind your own login too, or only run it locally before deploy.

export default function AdminRosterPage() {
  const [adminSecret, setAdminSecret] = useState("");
  // Paste roster as: Display Name, username, password  (one per line)
  const [rosterText, setRosterText] = useState("");
  const [results, setResults] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  function parseRoster(text) {
    return text
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [displayName, username, password] = line.split(",").map((s) => s.trim());
        return { displayName, username, password };
      });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setResults(null);
    const roster = parseRoster(rosterText);

    const res = await fetch("/.netlify/functions/create-students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ adminSecret, roster }),
    });
    const data = await res.json();
    setResults(data.results);
    setSubmitting(false);
  }

  return (
    <div className="admin-roster">
      <h1>Create Student Accounts</h1>
      <p>
        One player per line: <code>Display Name, username, password</code>
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Admin Secret
          <input
            type="password"
            value={adminSecret}
            onChange={(e) => setAdminSecret(e.target.value)}
          />
        </label>
        <textarea
          rows={12}
          placeholder={"Sarah Johnson, sarahj, TeamPass26!\nEmma Torres, emmat, TeamPass26!"}
          value={rosterText}
          onChange={(e) => setRosterText(e.target.value)}
        />
        <button type="submit" disabled={submitting}>
          {submitting ? "Creating..." : "Create Accounts"}
        </button>
      </form>

      {results && (
        <table>
          <thead>
            <tr><th>Username</th><th>Status</th></tr>
          </thead>
          <tbody>
            {results.map((r) => (
              <tr key={r.username}>
                <td>{r.username}</td>
                <td>{r.status === "created" ? "Created" : `Error: ${r.message}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
