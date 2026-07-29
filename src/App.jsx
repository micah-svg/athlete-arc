import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { useAuth } from "./lib/AuthContext";
import { useModuleContent } from "./lib/useModuleContent";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import CalendarPage from "./pages/CalendarPage";
import TechnicalTrackPage from "./pages/TechnicalTrackPage";
import TechnicalWeekPage from "./pages/TechnicalWeekPage";
import MyQuestionsPage from "./pages/MyQuestionsPage";
import ResourcesPage from "./pages/ResourcesPage";
import AdminResourcesPage from "./pages/AdminResourcesPage";
import AdminStudentsPage from "./pages/AdminStudentsPage";
import { technicalTrackById } from "./data/modules/technical-track-index";
import ModulePage from "./pages/ModulePage";
import AdminRosterPage from "./pages/AdminRosterPage";
import AdminHomePage from "./pages/AdminHomePage";
import AdminModuleEditorPage from "./pages/AdminModuleEditorPage";
import AdminProgressPage from "./pages/AdminProgressPage";
import AdminResponseReviewPage from "./pages/AdminResponseReviewPage";
import AdminQuestionsPage from "./pages/AdminQuestionsPage";
import AskQuestionButton from "./components/AskQuestionButton";
import NavHeader from "./components/NavHeader";
import { allModulesById } from "./data/course-structure";

function ModuleRoute() {
  const { moduleId } = useParams();
  const { content, loading } = useModuleContent(moduleId);

  if (!allModulesById[moduleId]) return <Navigate to="/" replace />;
  if (loading) return <div className="loading-screen">Loading...</div>;
  return <ModulePage module={content} />;
}

function TechnicalWeekRoute() {
  const { weekId } = useParams();
  const week = technicalTrackById[weekId];
  if (!week) return <Navigate to="/technical" replace />;
  return <TechnicalWeekPage week={week} />;
}

function RequireAuth({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="loading-screen">Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <>
      <NavHeader />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/admin-roster" element={<AdminRosterPage />} />
        <Route path="/admin-modules" element={<AdminModuleEditorPage />} />
        <Route path="/admin-progress" element={<AdminProgressPage />} />
        <Route path="/admin-responses" element={<AdminResponseReviewPage />} />
        <Route path="/admin-questions" element={<AdminQuestionsPage />} />
        <Route path="/admin-resources" element={<AdminResourcesPage />} />
        <Route path="/admin-students" element={<AdminStudentsPage />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <DashboardPage />
            </RequireAuth>
          }
        />
        <Route
          path="/calendar"
          element={
            <RequireAuth>
              <CalendarPage />
            </RequireAuth>
          }
        />
        <Route
          path="/technical"
          element={
            <RequireAuth>
              <TechnicalTrackPage />
            </RequireAuth>
          }
        />
        <Route
          path="/technical/:weekId"
          element={
            <RequireAuth>
              <TechnicalWeekRoute />
            </RequireAuth>
          }
        />
        <Route
          path="/my-questions"
          element={
            <RequireAuth>
              <MyQuestionsPage />
            </RequireAuth>
          }
        />
        <Route
          path="/resources"
          element={
            <RequireAuth>
              <ResourcesPage />
            </RequireAuth>
          }
        />
        <Route
          path="/module/:moduleId"
          element={
            <RequireAuth>
              <ModuleRoute />
            </RequireAuth>
          }
        />
      </Routes>
      <AskQuestionButton />
    </>
  );
}
