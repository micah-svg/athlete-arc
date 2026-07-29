import { Link } from "react-router-dom";

const STUDENT_LINKS = [
  { to: "/", label: "Dashboard" },
  { to: "/calendar", label: "Calendar" },
  { to: "/technical", label: "Technical Track" },
  { to: "/resources", label: "Resources" },
  { to: "/my-questions", label: "My Questions & Replies" },
];

const ADMIN_LINKS = [
  { to: "/admin", label: "Coach Tools Home" },
  { to: "/admin-roster", label: "Create Student Accounts" },
  { to: "/admin-students", label: "Students" },
  { to: "/admin-modules", label: "Edit Course Content" },
  { to: "/admin-progress", label: "Team Progress" },
  { to: "/admin-responses", label: "Review Responses" },
  { to: "/admin-questions", label: "Player Questions" },
  { to: "/admin-resources", label: "Resources" },
];

export default function NavDrawer({ open, onClose, isAdminSection, onLogout, onExitAdmin }) {
  if (!open) return null;
  const links = isAdminSection ? ADMIN_LINKS : STUDENT_LINKS;

  return (
    <div className="nav-drawer-overlay" onClick={onClose}>
      <nav className="nav-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="nav-drawer-header">
          <span>{isAdminSection ? "Coach Tools" : "Menu"}</span>
          <button className="nav-drawer-close" onClick={onClose} aria-label="Close menu">✕</button>
        </div>
        <ul className="nav-drawer-list">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} onClick={onClose} className="nav-drawer-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {isAdminSection ? (
          <button className="nav-drawer-logout" onClick={() => { onExitAdmin(); onClose(); }}>
            Exit Coach Tools
          </button>
        ) : (
          <button className="nav-drawer-logout" onClick={() => { onLogout(); onClose(); }}>
            Log Out
          </button>
        )}
      </nav>
    </div>
  );
}
