export const module3SubsLibero = {
  id: "unit1-mod3-subs-libero",
  unit: "Unit 1: Rules & Volleyball IQ",
  title: "Module 3: Substitutions & the Libero",

  video: {
    youtubeId: "REPLACE_WITH_REAL_ID",
    title: "How Substitutions & the Libero Work",
  },

  quiz: {
    questions: [
      {
        id: "q1",
        scenario: "Your team has used 17 substitutions in a set and it's still going. What happens if the coach requests an 18th?",
        options: [
          { id: "a", text: "That's fine, teams get 18 substitutions per set at the high school level", correct: true,
            explanation: "Right. NFHS rules allow up to 18 substitutions per set. The 18th is the last one available unless it's an exceptional (injury) substitution." },
          { id: "b", text: "Subs are unlimited, there's no cap", correct: false,
            explanation: "There is a hard cap, 18 per set at the high school level. After that, only an exceptional substitution for an injured or ill player is allowed." },
          { id: "c", text: "Teams only get 6 substitutions per set", correct: false,
            explanation: "6 subs is closer to elite international rules (FIVB), not high school. High school (NFHS) allows 18." },
        ],
      },
      {
        id: "q2",
        scenario: "A teammate wearing a different colored jersey than the rest of the team just subbed in for the back row. What's going on?",
        options: [
          { id: "a", text: "That's a uniform violation and should be flagged to the ref", correct: false,
            explanation: "It's required, not a violation. The libero has to wear a visibly different jersey specifically so officials can track her substitutions." },
          { id: "b", text: "That's the libero, a back-row defensive specialist whose subs don't count against the team's normal sub limit", correct: true,
            explanation: "Right. Libero substitutions are tracked separately and don't use up any of the team's 18 regular substitutions." },
          { id: "c", text: "Any player can wear a different jersey if they want extra attention from officials", correct: false,
            explanation: "It's not a style choice, it's a rule specific to the libero role so referees can enforce her back-row-only restriction." },
        ],
      },
      {
        id: "q3",
        scenario: "New this year: a team wants more flexibility with their defensive specialists. What changed about liberos for the 2026-27 season?",
        options: [
          { id: "a", text: "Teams can now designate up to two liberos per set (only one on the court at a time)", correct: true,
            explanation: "Correct, this is a brand-new NFHS rule change. Teams can now name zero, one, or two liberos before each set, which creates more flexibility without burning a regular substitution." },
          { id: "b", text: "Both liberos can be on the court at the same time now", correct: false,
            explanation: "Not quite, only one libero is ever on the court at once. The new rule allows a team to designate a second eligible libero for the set, not to play two simultaneously." },
          { id: "c", text: "Liberos can now attack the ball above the net", correct: false,
            explanation: "That restriction hasn't changed. Liberos are still limited to back-row play and can't attack the ball above net height from anywhere on the court." },
        ],
      },
      {
        id: "q4",
        scenario: "You started the set, got subbed out, and now want to re-enter. What's the rule?",
        options: [
          { id: "a", text: "You can enter in any open rotation spot you want", correct: false,
            explanation: "Re-entering players have to return to their original spot in the serving order relative to teammates, not just anywhere." },
          { id: "b", text: "You have to come back into your original position in the serving order", correct: true,
            explanation: "Right. A re-entering player returns to the exact spot in the rotation they left from." },
          { id: "c", text: "Once you're subbed out, you can't come back in for that set", correct: false,
            explanation: "Players can re-enter, as long as it's within the team's substitution limit and back into their original rotational spot." },
        ],
      },
    ],
  },

  thoughtExercise: {
    prompt:
      "Whether or not you're the libero, think about a rotation where getting subbed in or out could help the team. What situation would make sense for a substitution, and why?",
  },
};
