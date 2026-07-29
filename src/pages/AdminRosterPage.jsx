import { useState } from "react";

// Coach-only page. Not linked anywhere in student navigation; reach it directly
// at /admin-roster. For real protection beyond "nobody knows the URL," gate
// this route behind your own login too, or only run it locally before deploy.

export default function AdminRosterPage() {
  const [adminSecret, setAdminSecret] = useState("");
  // Paste roster as: Display Name, username, password  (one per line)
  const [rosterText, setRosterText] = useState("");
  const [results, setResults] = useState(null);
  const [lastRoster, setLastRoster] = useState([]);
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
    const confirmed = confirm(
      "Have you saved these usernames and passwords somewhere (a spreadsheet, a document)? " +
      "Once you hit Create Accounts, there is no way to see these passwords again, in this app or in Firebase."
    );
    if (!confirmed) return;

    setSubmitting(true);
    setResults(null);
    const roster = parseRoster(rosterText);
    setLastRoster(roster); // keep passwords in memory just long enough to show the final summary table

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

      <div className="card gold-edge">
        <p style={{ margin: 0, fontWeight: 700 }}>Save these somewhere before you submit.</p>
        <p style={{ margin: "0.4rem 0 0" }}>
          Once you click Create Accounts, these passwords can never be viewed again, not here, not
          in Firebase, not anywhere. Copy the list below into a spreadsheet or document first. If a
          player loses theirs later, you can reset it on the Students page, but you can't look up
          what it originally was.
        </p>
      </div>

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
        <>
          <div className="card gold-edge">
            <p style={{ margin: 0, fontWeight: 700 }}>Last chance, copy these down now.</p>
            <p style={{ margin: "0.4rem 0 0" }}>
              This is the only place these passwords will ever appear. Once you navigate away from
              this page, they're gone for good.
            </p>
          </div>
          <table>
            <thead>
              <tr><th>Name</th><th>Username</th><th>Password</th><th>Status</th></tr>
            </thead>
            <tbody>
              {results.map((r) => {
                const entry = lastRoster.find((e) => e.username === r.username);
                return (
                  <tr key={r.username}>
                    <td>{entry?.displayName}</td>
                    <td>{r.username}</td>
                    <td>{entry?.password}</td>
                    <td>{r.status === "created" ? "Created" : `Error: ${r.message}`}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
