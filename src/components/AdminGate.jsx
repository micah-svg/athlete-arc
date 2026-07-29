import { useState } from "react";

const SESSION_KEY = "vb_admin_secret";

export function getStoredAdminSecret() {
  return sessionStorage.getItem(SESSION_KEY) || "";
}

export default function AdminGate({ children }) {
  const [secret, setSecret] = useState(getStoredAdminSecret());
  const [unlocked, setUnlocked] = useState(!!getStoredAdminSecret());

  function handleSubmit(e) {
    e.preventDefault();
    sessionStorage.setItem(SESSION_KEY, secret);
    setUnlocked(true);
  }

  if (!unlocked) {
    return (
      <div className="admin-gate">
        <form onSubmit={handleSubmit} className="login-card">
          <h1>Coach Access</h1>
          <label>
            Admin Secret
            <input type="password" value={secret} onChange={(e) => setSecret(e.target.value)} required />
          </label>
          <button type="submit">Unlock</button>
        </form>
      </div>
    );
  }

  return children;
}
