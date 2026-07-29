import { useState } from "react";
import { useAuth } from "../lib/AuthContext";
import { brand } from "../brandConfig";

export default function LoginPage() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await login(username, password);
    } catch (err) {
      setError(`Username or password is incorrect. Check with ${brand.coachContactLabel} if you're not sure.`);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="login-screen">
      <form onSubmit={handleSubmit} className="login-card">
        <div className="brand-mark">
          <img src="/logo.svg" alt="" className="brand-logo" />
        </div>
        <h1>{brand.appName}</h1>
        <p className="subtitle">{brand.tagline}</p>

        <label>
          Username
          <input
            type="text"
            autoCapitalize="none"
            autoCorrect="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={submitting}>
          {submitting ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
