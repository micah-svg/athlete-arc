import { Link } from "react-router-dom";
import { technicalTrackWeeks } from "../data/modules/technical-track-index";

export default function TechnicalTrackPage() {
  return (
    <div className="dashboard-page">
      <h1>Technical Track</h1>
      <p>10 weeks, running the whole season. Pre-work before that week's practices, post-work after.</p>
      <ul className="module-list">
        {technicalTrackWeeks.map((week) => (
          <li key={week.id}>
            <Link to={`/technical/${week.id}`} className="module-list-item">
              <span>{week.title}</span>
              <span className="chevron" aria-hidden="true">›</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
