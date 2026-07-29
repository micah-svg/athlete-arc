export const module1ScoringMatchFormat = {
  id: "unit1-mod1-scoring",
  unit: "Unit 1: Rules & Volleyball IQ",
  title: "Module 1: Scoring & Match Format",

  video: {
    youtubeId: "REPLACE_WITH_REAL_ID",
    title: "How Volleyball Scoring Actually Works",
  },

  quiz: {
    questions: [
      {
        id: "q1",
        scenario:
          "Your team serves the ball, but the other team wins the rally. What happens to the serve?",
        options: [
          { id: "a", text: "Your team keeps serving next point too", correct: false,
            explanation: "In rally scoring, whoever wins the rally gets the point AND the serve, no matter who served it." },
          { id: "b", text: "The other team gets a point and now serves", correct: true,
            explanation: "Right. Rally scoring means every rally produces a point for someone, and that team serves next." },
          { id: "c", text: "Nobody scores, the point replays", correct: false,
            explanation: "There's no replay just because the serving team lost the rally. That's how points were scored decades ago (side-out scoring), not how it works now." },
        ],
      },
      {
        id: "q2",
        scenario: "It's 24-23 in the first set. What does your team need to win the set?",
        options: [
          { id: "a", text: "Just reach 25 points, doesn't matter by how much", correct: false,
            explanation: "Sets have to be won by 2. Reaching 25 at 25-24 wouldn't end it, the set keeps going until someone is up by 2." },
          { id: "b", text: "Score 2 more points in a row than the opponent to win by 2", correct: true,
            explanation: "Exactly. A set goes to 25, win by 2. If it's tight, it keeps extending (26-24, 27-25, etc.) until someone gets that 2-point cushion." },
          { id: "c", text: "The set is over once either team hits 25", correct: false,
            explanation: "Not quite, the set only ends at 25 if the margin is already 2 or more. A 25-24 score means the set continues." },
        ],
      },
      {
        id: "q3",
        scenario: "Your JV2 match is scheduled for 5:00 PM. A friend asks what time it'll end. What's the honest answer?",
        options: [
          { id: "a", text: "Exactly 6:00, matches always run an hour", correct: false,
            explanation: "There's no game clock in volleyball. Length depends entirely on how many points get played, not a fixed time." },
          { id: "b", text: "It depends on how many sets are played and how close they are", correct: true,
            explanation: "Right. A quick two-set sweep can be well under an hour. A close three-setter can run considerably longer. There's no clock counting it down." },
          { id: "c", text: "It ends whenever the ref decides", correct: false,
            explanation: "The match ends based on sets won, not official discretion. JV2 matches are best of 3." },
        ],
      },
      {
        id: "q4",
        scenario: "Your team has won one set and lost one set. What determines who wins the match?",
        options: [
          { id: "a", text: "Whoever scored more total points across both sets", correct: false,
            explanation: "Total point count across the match doesn't decide anything. It's about sets won, not cumulative points." },
          { id: "b", text: "A third and final set decides it", correct: true,
            explanation: "Right, at JV2 (best of 3), a 1-1 split means a decisive third set." },
          { id: "c", text: "The match ends in a tie", correct: false,
            explanation: "Volleyball matches don't end in ties, there's always a deciding set when it's split." },
        ],
      },
    ],
  },

  thoughtExercise: {
    prompt:
      "Rally scoring means every single rally matters, whether your team served or not. How does knowing that change how you should mentally reset between points, especially after a rally you didn't serve and still lost?",
  },
};
