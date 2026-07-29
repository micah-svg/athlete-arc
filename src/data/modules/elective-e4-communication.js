export const electiveE4Communication = {
  id: "elective-e4-communication",
  unit: "Elective: Communication & Conflict Resolution",
  title: "E4: Communication & Conflict Resolution for Teams",

  video: {
    youtubeId: "REPLACE_WITH_REAL_ID",
    title: "Handling Disagreements Without Damaging the Team",
  },

  quiz: {
    questions: [
      {
        id: "q1",
        scenario: "Two teammates disagree loudly about a missed rotation call during a scrimmage. Is disagreement itself the problem?",
        options: [
          { id: "a", text: "Yes, good teams never disagree", correct: false,
            explanation: "Every team has friction sometimes. The goal isn't avoiding disagreement entirely, it's handling it in a way that doesn't damage the team." },
          { id: "b", text: "No, disagreement is normal, how it's handled is what actually matters", correct: true,
            explanation: "Right. Friction is normal on any team. What determines whether it helps or hurts the team is how it's handled in the moment." },
          { id: "c", text: "Disagreement is fine as long as it happens loudly enough for the coach to hear and settle it", correct: false,
            explanation: "Volume and visibility aren't what makes a disagreement productive or not, how it's actually communicated is." },
        ],
      },
      {
        id: "q2",
        scenario: "Which feedback is more useful to a teammate after a missed play?",
        options: [
          { id: "a", text: "\"You're bad at reading the setter\"", correct: false,
            explanation: "This targets the person, not the play. It tends to make teammates defensive rather than helping them improve." },
          { id: "b", text: "\"That set looked quick, next time let's call it out earlier\"", correct: true,
            explanation: "Right. This targets the specific play and offers something actionable, which is far more useful and far less likely to create tension." },
          { id: "c", text: "Nothing at all, just let it go completely", correct: false,
            explanation: "Saying nothing misses a chance to actually help. Constructive, play-focused feedback is different from criticism, and it's worth giving." },
        ],
      },
      {
        id: "q3",
        scenario: "A player is frustrated with a coaching decision about playing time. What's the appropriate way to raise it?",
        options: [
          { id: "a", text: "Complain about it to teammates on the sideline during the match", correct: false,
            explanation: "Sideline complaining doesn't resolve anything and can spread frustration to teammates who weren't even involved." },
          { id: "b", text: "Ask for a respectful, direct conversation with the coach about it, at an appropriate time", correct: true,
            explanation: "Right. Raising a genuine concern directly and respectfully, at the right time (not mid-match), is the appropriate path." },
          { id: "c", text: "Post about it on social media", correct: false,
            explanation: "This escalates a private concern into a public one and doesn't actually address the issue with the person who can respond to it." },
        ],
      },
    ],
  },

  thoughtExercise: {
    prompt:
      "Think of a recent moment of friction with a teammate, even a small one. If you had to redo that conversation focused only on the specific play or situation, not the person, what would you say differently?",
  },
};
