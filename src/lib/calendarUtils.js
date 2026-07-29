import { seasonConfig, matchesByDate } from "../data/season-schedule";

// Parse a "YYYY-MM-DD" string as a local date (avoids UTC off-by-one issues)
export function parseLocalDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function formatDate(date) {
  return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

export function isoOf(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

/**
 * Builds the 7 days of a given week (starting Monday), each annotated with
 * whether it's a practice day, a match day, or neither (weekend/off).
 */
export function buildWeekDays(weekStartIso) {
  const start = parseLocalDate(weekStartIso);
  const days = [];

  for (let i = 0; i < 7; i++) {
    const date = addDays(start, i);
    const iso = isoOf(date);
    const dayOfWeek = date.getDay();
    const match = matchesByDate[iso];
    const isPracticeDay = seasonConfig.practiceDays.includes(dayOfWeek) && !match;

    days.push({
      iso,
      date,
      label: formatDate(date),
      dayOfWeek,
      match: match || null,
      isPracticeDay,
    });
  }

  return days;
}

/**
 * The Thursday of the same week as weekStartIso (Monday), used for the
 * weekly module due date.
 */
export function thursdayOfWeek(weekStartIso) {
  const start = parseLocalDate(weekStartIso);
  const thursday = addDays(start, seasonConfig.weeklyDueDay - 1); // start is Monday (day 1)
  return thursday;
}
