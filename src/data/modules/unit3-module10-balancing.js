export const module10Balancing = {
  id: "unit3-mod10-balancing",
  unit: "Unit 3: Time Management & Life Skills",
  title: "Module 10: Balancing School & Volleyball",

  video: {
    youtubeId: "REPLACE_WITH_REAL_ID",
    title: "Urgent vs. Important, and Asking for Help",
  },

  quiz: {
    questions: [
      {
        id: "q1",
        scenario:
          "You have a test tomorrow, a match tonight, and a group project due Friday. The project feels the most stressful right now. Is it necessarily the most urgent?",
        options: [
          { id: "a", text: "Yes, whatever feels most stressful is automatically the most urgent", correct: false,
            explanation: "Stress level and true urgency aren't the same thing. Something due Friday is less urgent right now than a test tomorrow." },
          { id: "b", text: "Not necessarily, urgency depends on timing, not how stressful something feels", correct: true,
            explanation: "Right. The test tomorrow is more urgent by timing, even if the Friday project feels like it's looming larger emotionally." },
          { id: "c", text: "None of these matter until the match is over", correct: false,
            explanation: "Waiting until the match is over to even think about school responsibilities isn't sorting priorities, it's avoiding them." },
        ],
      },
      {
        id: "q2",
        scenario: "A student-athlete feels overwhelmed by everything on her plate this week. What's the recommended first move?",
        options: [
          { id: "a", text: "Push through alone since asking for help feels like admitting failure", correct: false,
            explanation: "Asking for help with prioritizing isn't a failure, it's a normal, expected part of managing a genuinely full schedule." },
          { id: "b", text: "Ask a parent, coach, teacher, or counselor for help sorting out the week", correct: true,
            explanation: "Right. You don't have to figure out prioritizing completely alone. Asking a trusted adult for help sorting a packed week is a smart move, not a weak one." },
          { id: "c", text: "Drop one commitment at random to feel less busy", correct: false,
            explanation: "Randomly dropping something isn't prioritizing, it's avoiding the actual sorting work. Asking for help with the sorting is the better first step." },
        ],
      },
      {
        id: "q3",
        scenario: "A student had a solid weekly plan, but an unexpected family event throws off her whole schedule one week. What's the right way to think about this?",
        options: [
          { id: "a", text: "The plan failed and she should feel like she's bad at managing her time", correct: false,
            explanation: "One disrupted week doesn't mean the plan or the person failed. Being harsh on yourself here misses the actual point of building this skill." },
          { id: "b", text: "This happens, being flexible and resetting is part of the skill, not a sign the plan didn't work", correct: true,
            explanation: "Right. No plan survives every week perfectly. Flexibility and getting back on track is exactly what good time management actually looks like in practice." },
          { id: "c", text: "She should have predicted this and planned around it", correct: false,
            explanation: "Unexpected events are, by definition, not predictable. The skill here is adjusting afterward, not preventing every possible disruption." },
        ],
      },
    ],
  },

  thoughtExercise: {
    prompt:
      "Think of something on your plate right now that feels stressful. Is it actually urgent, actually important, or can it wait? What would you do differently once you sort it into the right bucket?",
  },
};
