import { Link } from "react-router-dom";
import { courseStructure } from "../data/course-structure";
import { electiveDeadline } from "../data/elective-schedule";
import { useAuth } from "../lib/AuthContext";

export default function DashboardPage() {
  const { profile, logout } = useAuth();

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div className="dashboard-header-left">
          <img src="/logo.svg" alt="" className="brand-logo brand-logo-small" />
          <div>
            <p className="dashboard-greeting">Hi{profile?.displayName ? `, ${profile.displayName.split(" ")[0]}` : ""}</p>
            <h1>Your Course</h1>
          </div>
        </div>
        <button className="logout-btn" onClick={logout}>Log out</button>
      </header>

      <Link to="/calendar" className="calendar-link-banner">
        View the course calendar (practices, matches, and what's due) →
      </Link>

      <Link to="/technical" className="calendar-link-banner" style={{ background: "var(--teal-dark)" }}>
        Technical Track — 10-week weekly focus →
      </Link>

      <Link to="/my-questions" className="calendar-link-banner" style={{ background: "var(--muted)" }}>
        My Questions & Replies →
      </Link>

      <Link to="/resources" className="calendar-link-banner" style={{ background: "var(--accent)", color: "var(--teal-dark)" }}>
        Resources →
      </Link>

      <div className="card gold-edge elective-deadline-banner">
        <p className="calendar-due-label">All electives below due</p>
        <p className="calendar-due-item">
          {new Date(electiveDeadline.date + "T00:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} at {electiveDeadline.time}
        </p>
      </div>

      {courseStructure.electives.map((unit) => (
        <section key={unit.unitTitle} className="unit-section">
          <h2>{unit.unitTitle}</h2>
          <ul className="module-list">
            {unit.modules.map((module) => (
              <li key={module.id}>
                <Link to={`/module/${module.id}`} className="module-list-item">
                  <span>{module.title}</span>
                  <span className="chevron" aria-hidden="true">›</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
