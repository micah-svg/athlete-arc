export const module8Priorities = {
  id: "unit3-mod8-priorities",
  unit: "Unit 3: Time Management & Life Skills",
  title: "Module 8: Priorities & Goal Setting",

  video: {
    youtubeId: "REPLACE_WITH_REAL_ID",
    title: "Coach Micah's Priority Framework & Setting a Real Goal",
  },

  quiz: {
    questions: [
      {
        id: "q1",
        scenario:
          "A team event and an important family event fall on the same evening. According to Coach Micah's priority framework, what comes first?",
        options: [
          { id: "a", text: "The team event, since volleyball commitments always come first during season", correct: false,
            explanation: "Coach Micah's stated order puts Family above Teammates and above 'everything else,' which includes volleyball." },
          { id: "b", text: "Family", correct: true,
            explanation: "Right. The order is Church, Family, School/Work, Teammates, then everything else (volleyball included)." },
          { id: "c", text: "Whichever one is more fun", correct: false,
            explanation: "The framework isn't about preference in the moment, it's a deliberate order meant to guide decisions before they come up." },
        ],
      },
      {
        id: "q2",
        scenario: "Where does volleyball itself fall in Coach Micah's stated priority order?",
        options: [
          { id: "a", text: "It's priority #1, above everything else", correct: false,
            explanation: "Volleyball falls under 'everything else,' the fifth tier, below Church, Family, School/Work, and Teammates." },
          { id: "b", text: "It's priority #3, above school and work", correct: false,
            explanation: "School/Work sits at #3, ahead of volleyball in this framework." },
          { id: "c", text: "It's part of 'everything else,' the last tier in the order", correct: true,
            explanation: "Right. This doesn't mean volleyball doesn't matter, it means it shouldn't quietly climb above family, faith, or school when they conflict." },
        ],
      },
      {
        id: "q3",
        scenario: "Which of these is an actual SMART goal, rather than just a wish?",
        options: [
          { id: "a", text: "\"I want to get better at serving\"", correct: false,
            explanation: "This isn't measurable or time-based. It's a direction, not a SMART goal." },
          { id: "b", text: "\"I want to improve my serve percentage to 90% in scrimmages by week 6\"", correct: true,
            explanation: "Right. This is specific, measurable (a percentage), realistic, relevant, and time-based (by week 6)." },
          { id: "c", text: "\"I want to be the best server on the team eventually\"", correct: false,
            explanation: "This has no specific number, no clear timeframe, and depends on other people's performance, not just your own." },
        ],
      },
    ],
  },

  goalSettingForm: true,
};
