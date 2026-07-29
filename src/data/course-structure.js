import { unit1Modules } from "./unit1-index";
import { unit2Modules } from "./unit2-index";
import { unit3Modules } from "./unit3-index";
import { electiveModules } from "./electives-index";

// Everything except the technical track is now a single elective pool, all
// due by the same deadline (see elective-schedule.js). Grouped headers are
// kept purely for readability on the dashboard, they carry no separate
// "required core" meaning anymore.
export const courseStructure = {
  electives: [
    { unitTitle: "Rules & Volleyball IQ", modules: unit1Modules },
    { unitTitle: "Team & Culture", modules: unit2Modules },
    { unitTitle: "Time Management & Life Skills", modules: unit3Modules },
    ...electiveModules.map((m) => ({ unitTitle: m.unit.replace(/^Elective: /, ""), modules: [m] })),
  ],
  // Technical track (10-week pre/post work cycle) is a separate, parallel
  // module tree — see src/data/modules/week1-passing.js for the pattern.
  // Unaffected by the elective restructure; still runs on its own weekly
  // Thursday cadence across all 10 weeks.
};

// Flat list of every module in the elective pool (everything but the
// technical track), useful for progress calculations and scheduling.
export const allElectiveModules = [...unit1Modules, ...unit2Modules, ...unit3Modules, ...electiveModules];

// Lookup by id, used by the module route (/module/:moduleId)
export const allModulesById = Object.fromEntries(
  allElectiveModules.map((m) => [m.id, m])
);
