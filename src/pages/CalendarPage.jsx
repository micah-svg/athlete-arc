import { Link } from "react-router-dom";
import { weeklyPlan } from "../data/weekly-plan";
import { seasonConfig } from "../data/season-schedule";
import { electiveDeadline, electiveSchedule } from "../data/elective-schedule";
import { buildWeekDays, thursdayOfWeek, formatDate, parseLocalDate } from "../lib/calendarUtils";
import { allModulesById } from "../data/course-structure";

function ElectiveDayRow({ day }) {
  return (
    <div className="calendar-day is-off">
      <span className="calendar-day-label">{formatDate(parseLocalDate(day.date))}</span>
      {day.moduleIds.length === 0 ? (
        <span className="calendar-day-detail calendar-day-off">Catch-up day — nothing new, deadline is tonight at {electiveDeadline.time}</span>
      ) : (
        <span className="calendar-day-detail">
          {day.moduleIds.map((id, i) => {
            const mod = allModulesById[id];
            return (
              <span key={id}>
                {i > 0 && ", "}
                <Link to={`/module/${id}`} className="calendar-due-item" style={{ display: "inline" }}>
                  {mod ? mod.title : id}
                </Link>
              </span>
            );
          })}
        </span>
      )}
    </div>
  );
}

function TechnicalWeekBlock({ week }) {
  const days = buildWeekDays(week.startDate);
  const dueDate = thursdayOfWeek(week.startDate);

  return (
    <div className="calendar-week card">
      <p className="unit-label">Week {week.weekNumber}</p>

      <div className="calendar-due-block">
        <p className="calendar-due-label">Due this week — {formatDate(dueDate)} at {seasonConfig.weeklyDueTime}</p>
        <p className="calendar-due-item calendar-technical-item">
          <Link to={`/technical/${week.technicalWeekId}`} style={{ color: "var(--muted)" }}>
            {week.technicalWeekLabel} (technical track)
          </Link>
        </p>
      </div>

      <div className="calendar-days">
        {days.map((day) => (
          <div key={day.iso} className={`calendar-day ${day.match ? "is-match" : day.isPracticeDay ? "is-practice" : "is-off"}`}>
            <span className="calendar-day-label">{day.label}</span>
            {day.match ? (
              <span className="calendar-day-detail">
                Match — {day.match.opponent} — {day.match.time} <span className="match-type-tag">{day.match.type}</span>
              </span>
            ) : day.isPracticeDay ? (
              <span className="calendar-day-detail">
                Practice — {seasonConfig.practiceTime.start}–{seasonConfig.practiceTime.end}
              </span>
            ) : (
              <span className="calendar-day-detail calendar-day-off">Off</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CalendarPage() {
  const electiveDeadlineDate = formatDate(parseLocalDate(electiveDeadline.date));

  return (
    <div className="calendar-page">
      <h1>Course Calendar</h1>

      <div className="card gold-edge elective-deadline-banner">
        <p className="calendar-due-label">All electives due</p>
        <p className="calendar-due-item">{electiveDeadlineDate} at {electiveDeadline.time}</p>
      </div>

      <section className="unit-section">
        <h2>Elective Pacing — Aug 20-28</h2>
        <div className="card">
          <div className="calendar-days">
            {electiveSchedule.map((day) => (
              <ElectiveDayRow key={day.date} day={day} />
            ))}
          </div>
        </div>
      </section>

      <section className="unit-section">
        <h2>Technical Track — 10 Weeks</h2>
        {weeklyPlan.map((week) => (
          <TechnicalWeekBlock key={week.weekNumber} week={week} />
        ))}
      </section>
    </div>
  );
}
