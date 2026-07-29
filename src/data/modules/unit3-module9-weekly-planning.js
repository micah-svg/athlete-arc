export const module9WeeklyPlanning = {
  id: "unit3-mod9-weekly-planning",
  unit: "Unit 3: Time Management & Life Skills",
  title: "Module 9: Weekly Planning",

  video: {
    youtubeId: "REPLACE_WITH_REAL_ID",
    title: "Building a Weekly Rhythm That Actually Works",
  },

  quiz: {
    questions: [
      {
        id: "q1",
        scenario: "It's a practice day, not a match day. When does homework fit into the day?",
        options: [
          { id: "a", text: "After Practice → Dinner → Shower → Unwind", correct: true,
            explanation: "Right. The practice-day rhythm is School day → Practice → Dinner → Shower → Unwind → Homework." },
          { id: "b", text: "It doesn't, homework only happens on weekends", correct: false,
            explanation: "Homework does fit on practice days, just not match days. Practice days have more room for it than match days do." },
          { id: "c", text: "Before practice, so it's out of the way", correct: false,
            explanation: "The recommended rhythm places homework after dinner and unwind time, once the athlete has actually recovered from practice." },
        ],
      },
      {
        id: "q2",
        scenario: "Why doesn't homework appear in the match-day rhythm?",
        options: [
          { id: "a", text: "Because homework doesn't matter on match days", correct: false,
            explanation: "It's not that it doesn't matter, it's that match days genuinely don't leave the energy or time for it well." },
          { id: "b", text: "Because matches run late and athletes are genuinely spent afterward, so homework belongs on weekends or practice days instead", correct: true,
            explanation: "Right. The plan is to build homework into practice days and weekends deliberately, rather than trying to force it in after a match." },
          { id: "c", text: "Because match days are shorter than practice days", correct: false,
            explanation: "Match days often run longer than practice days when you count warm-ups, the match itself, and the post-match team routine." },
        ],
      },
      {
        id: "q3",
        scenario: "What's the recommended way to track a busy week, rather than relying on memory?",
        options: [
          { id: "a", text: "A planner, physical or digital, checked a couple of times a day", correct: true,
            explanation: "Right. Writing it down and checking it regularly beats trying to hold the whole week in your head." },
          { id: "b", text: "Just remembering what's coming up each day", correct: false,
            explanation: "Memory alone is exactly what leads to missed assignments and last-minute scrambling. A planner is the more reliable tool." },
          { id: "c", text: "Waiting until something feels urgent to deal with it", correct: false,
            explanation: "That's reactive, not planned, and it's the pattern that leads to exhausted, behind-on-everything weeks." },
        ],
      },
    ],
  },

  weeklyPlannerForm: true,
};
