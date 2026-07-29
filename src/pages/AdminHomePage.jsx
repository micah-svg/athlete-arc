import { Link } from "react-router-dom";
import AdminGate from "../components/AdminGate";

export default function AdminHomePage() {
  return (
    <AdminGate>
      <div className="admin-roster">
        <h1>Coach Tools</h1>
        <ul className="module-list">
          <li><Link className="module-list-item" to="/admin-roster">Create Student Accounts</Link></li>
          <li><Link className="module-list-item" to="/admin-modules">Edit Course Content</Link></li>
          <li><Link className="module-list-item" to="/admin-progress">Team Progress</Link></li>
          <li><Link className="module-list-item" to="/admin-responses">Review Responses</Link></li>
          <li><Link className="module-list-item" to="/admin-questions">Player Questions</Link></li>
          <li><Link className="module-list-item" to="/admin-resources">Resources</Link></li>
        </ul>
      </div>
    </AdminGate>
  );
}
