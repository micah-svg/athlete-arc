import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../lib/AuthContext";
import { brand } from "../brandConfig";
import NavDrawer from "./NavDrawer";

export default function NavHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // No header on the login screen itself, nothing to navigate back from yet.
  if (location.pathname === "/login") return null;

  const isAdminSection = location.pathname.startsWith("/admin");
  const homePath = isAdminSection ? "/admin" : "/";
  const isHome = location.pathname === homePath;

  function handleBack() {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate(homePath);
    }
  }

  function handleExitAdmin() {
    sessionStorage.removeItem("vb_admin_secret");
    navigate("/login");
  }

  return (
    <>
      <header className="nav-header">
        {!isHome ? (
          <button className="nav-back-btn" onClick={handleBack} aria-label="Go back">
            ← Back
          </button>
        ) : (
          <span className="nav-back-spacer" />
        )}

        <Link to={homePath} className="nav-brand">
          <img src="/logo.svg" alt="" className="brand-logo-small" />
          <span>{brand.appName}</span>
        </Link>

        <button className="nav-hamburger-btn" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
          ☰
        </button>
      </header>

      <NavDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        isAdminSection={isAdminSection}
        onLogout={logout}
        onExitAdmin={handleExitAdmin}
      />
    </>
  );
}
