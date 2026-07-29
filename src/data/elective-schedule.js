// All 15 elective-pool modules (the former core Units 1-3 plus the original
// 5 electives) are due by a single deadline. This file also lays out a
// suggested day-by-day release/pacing across Aug 20-28 so the work doesn't
// all land the same day — purely a suggested spacing, easy to reorder or
// re-space in the array below. The deadline itself (electiveDeadline) is
// what actually matters; the daily spacing is just a recommended rhythm.

export const electiveDeadline = { date: "2026-08-28", time: "8:00 PM" };

export const electiveSchedule = [
  { date: "2026-08-20", moduleIds: ["unit1-mod1-scoring", "unit1-mod2-rotations"] },
  { date: "2026-08-21", moduleIds: ["unit1-mod3-subs-libero", "unit1-mod4-strategy"] },
  { date: "2026-08-22", moduleIds: ["unit1-mod5-vocabulary", "unit2-mod6-your-role"] },
  { date: "2026-08-23", moduleIds: ["unit2-mod7-team-culture", "unit3-mod8-priorities"] },
  { date: "2026-08-24", moduleIds: ["unit3-mod9-weekly-planning", "unit3-mod10-balancing"] },
  { date: "2026-08-25", moduleIds: ["elective-e1-scorebook", "elective-e2-nutrition"] },
  { date: "2026-08-26", moduleIds: ["elective-e3-injury-prevention", "elective-e4-communication"] },
  { date: "2026-08-27", moduleIds: ["elective-e5-match-day-protocol"] },
  { date: "2026-08-28", moduleIds: [] }, // deadline day itself — kept clear as a catch-up/buffer day
];
