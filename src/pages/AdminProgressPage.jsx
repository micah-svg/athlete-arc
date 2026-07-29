import { useEffect, useState } from "react";
import AdminGate, { getStoredAdminSecret } from "../components/AdminGate";
import { allElectiveModules } from "../data/course-structure";

async function callAdmin(action, payload) {
  const res = await fetch("/.netlify/functions/admin-data", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ adminSecret: getStoredAdminSecret(), action, payload }),
  });
  return res.json();
}

function ProgressTable() {
  const [students, setStudents] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  const allModules = allElectiveModules;

  useEffect(() => {
    (async () => {
      const s = await callAdmin("list-students");
      const sub = await callAdmin("list-submissions");
      setStudents(s.students || []);
      setSubmissions(sub.submissions || []);
      setLoading(false);
    })();
  }, []);

  if (loading) return <p>Loading progress...</p>;

  // A module can require more than just the quiz: the thought exercise,
  // and/or whichever structured form that specific module uses (SMART goal,
  // weekly planner). "Done" means every applicable piece has a submission.
  function getRequiredTypes(module) {
    const required = ["quiz", "comprehension"];
    if (module.thoughtExercise) required.push("thoughtExercise");
    if (module.goalSettingForm) required.push("smartGoal");
    if (module.weeklyPlannerForm) required.push("weeklyPlan");
    return required;
  }

  function getStatus(studentId, module) {
    const required = getRequiredTypes(module);
    const completedTypes = required.filter((type) => {
      const submission = submissions.find(
        (s) => s.studentId === studentId && s.moduleId === module.id && s.type === type
      );
      if (!submission) return false;
      // Certification modules (currently E1) need the threshold actually met,
      // not just any quiz attempt on record.
      if (type === "quiz" && typeof module.certificationThreshold === "number") {
        return submission.score / submission.total >= module.certificationThreshold;
      }
      return true;
    });
    if (completedTypes.length === required.length) return "done";
    if (completedTypes.length > 0) return "partial";
    return "none";
  }

  const STATUS_SYMBOL = { done: "✓", partial: "◐", none: "—" };

  return (
    <div style={{ overflowX: "auto" }}>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            {allModules.map((m) => (
              <th key={m.id} title={m.title}>{m.title.split(":")[0]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.uid}>
              <td>{student.displayName || student.username}</td>
              {allModules.map((m) => (
                <td key={m.id} style={{ textAlign: "center" }}>
                  {STATUS_SYMBOL[getStatus(student.uid, m)]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginTop: "1rem", color: "var(--muted)", fontSize: "0.85rem" }}>
        ✓ = fully complete (quiz, comprehension self-check, plus thought exercise and/or forms where the module has them).<br />
        ◐ = started but missing at least one required piece.<br />
        — = not started.
      </p>
    </div>
  );
}

export default function AdminProgressPage() {
  return (
    <AdminGate>
      <div className="admin-roster">
        <h1>Team Progress</h1>
        <ProgressTable />
      </div>
    </AdminGate>
  );
}
