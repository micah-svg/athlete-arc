// All dates are ISO strings (YYYY-MM-DD) in local team time.

export const seasonConfig = {
  practiceStart: "2026-08-17", // Monday
  practiceDays: [1, 2, 3, 4, 5], // Mon-Fri (0 = Sunday, per JS Date.getDay())
  practiceTime: { start: "3:30 PM", end: "5:30 PM" },

  weeklyDueDay: 4, // Thursday (0 = Sunday, so Thu = 4), used by the technical track
  weeklyDueTime: "8:00 PM",
};

// Real JV2 match schedule, as given.
export const matches = [
  { date: "2026-09-01", time: "TBD", opponent: "@ Oregon City", type: "Non-League" },
  { date: "2026-09-03", time: "5:00 PM", opponent: "vs. St. Helens", type: "League" },
  { date: "2026-09-10", time: "TBD", opponent: "@ Hood River Valley", type: "League" },
  { date: "2026-09-15", time: "5:00 PM", opponent: "@ Centennial", type: "League" },
  { date: "2026-09-17", time: "5:00 PM", opponent: "@ Milwaukie (Aux Gym)", type: "League" },
  { date: "2026-09-21", time: "5:00 PM", opponent: "vs. Hillsboro", type: "Non-League" },
  { date: "2026-09-24", time: "5:00 PM", opponent: "vs. Sandy", type: "League" },
  { date: "2026-09-26", time: "8:00 AM", opponent: "@ Milwaukie JV2 Tournament", type: "Tournament" },
  { date: "2026-09-28", time: "5:00 PM", opponent: "vs. Parkrose", type: "League" },
  { date: "2026-10-05", time: "5:00 PM", opponent: "vs. Hood River Valley", type: "League" },
  { date: "2026-10-07", time: "5:00 PM", opponent: "vs. Centennial", type: "League" },
  { date: "2026-10-10", time: "TBD", opponent: "@ Lincoln JV2 Tournament (neutral site)", type: "Tournament" },
  { date: "2026-10-13", time: "5:00 PM", opponent: "vs. Milwaukie", type: "League" },
  { date: "2026-10-20", time: "5:00 PM", opponent: "@ Sandy", type: "League" },
  { date: "2026-10-22", time: "4:30 PM", opponent: "@ Parkrose", type: "League" },
];

export const matchesByDate = Object.fromEntries(matches.map((m) => [m.date, m]));
