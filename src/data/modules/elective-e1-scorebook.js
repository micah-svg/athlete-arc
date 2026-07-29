export const electiveE1Scorebook = {
  id: "elective-e1-scorebook",
  unit: "Elective: Scoring & Line Judge Certification",
  title: "E1: Scoring & Line Judge Certification",

  video: {
    youtubeId: "REPLACE_WITH_REAL_ID",
    title: "Reading the Scoresheet & Line Judge Signals",
  },

  quiz: {
    questions: [
      {
        id: "q1",
        scenario: "A player on your team serves and your team scores. What do you mark on the scoresheet?",
        options: [
          { id: "a", text: "Nothing, only opponent points get marked", correct: false,
            explanation: "Every point, for either team, gets recorded in the running score. This one should be marked as your team's point." },
          { id: "b", text: "The point in your team's running score column, in the appropriate serving order square", correct: true,
            explanation: "Right. Each square represents one action (serve, sub, timeout), and points are recorded as they happen in the running score." },
          { id: "c", text: "You wait until the end of the set to record every point at once", correct: false,
            explanation: "Points are marked live, in real time, as each rally ends, not batched at the end of a set." },
        ],
      },
      {
        id: "q2",
        scenario: "A substitution happens mid-set. What's the correct scorebook procedure?",
        options: [
          { id: "a", text: "Ignore it unless it affects the score", correct: false,
            explanation: "Substitutions have to be recorded regardless of score impact, since they affect who's tracked in the serving order." },
          { id: "b", text: "Mark the substitution in the appropriate spot and note it in the comments if needed", correct: true,
            explanation: "Right. Substitutions are tracked in the scoresheet, and unusual ones may need a comment noting the players and situation." },
          { id: "c", text: "Only the head coach is allowed to know about substitutions", correct: false,
            explanation: "The scorebook is meant to accurately reflect what happens on the court for both teams and officials to reference, not to be hidden information." },
        ],
      },
      {
        id: "q3",
        scenario: "As a line judge, the ball lands right on the boundary line during a rally. What's your call?",
        options: [
          { id: "a", text: "Any touch of the line at all means it's out", correct: false,
            explanation: "That's backwards. Touching any part of the line means the ball is IN, not out." },
          { id: "b", text: "The ball is in, since touching any part of the line counts as landing inbounds", correct: true,
            explanation: "Right. A ball touching any part of the boundary line is ruled in bounds." },
          { id: "c", text: "It's the second referee's call, not the line judge's", correct: false,
            explanation: "Boundary line calls are exactly what a line judge is positioned and signaled to make." },
        ],
      },
      {
        id: "q4",
        scenario: "You're scoring and notice a player was given a yellow card for unsporting conduct. What has to be recorded?",
        options: [
          { id: "a", text: "Nothing, cards aren't tracked in the scorebook", correct: false,
            explanation: "Cards for unsporting conduct are specifically required to be recorded, including the team/individual, the violation, and the score at the time." },
          { id: "b", text: "A brief note in the comments section including the team/individual, the violation, and the score when it happened", correct: true,
            explanation: "Right. This is exactly what the comments section is for, and it carries over from set to set for conduct issues." },
          { id: "c", text: "Just the player's number, nothing else", correct: false,
            explanation: "A full note (violation and score context) is required, not just an identifying number." },
        ],
      },
    ],
  },

  thoughtExercise: {
    prompt:
      "What part of scorekeeping or line judging feels least comfortable to you right now? Be specific, that's exactly what to practice on a real sheet before the certification check.",
  },

  certificationNote:
    "This quiz is scored. You need 90% or higher to pass certification, and you can retake it as many times as you need, there's no penalty for retaking. Certification also requires finishing everything else in this elective (thought exercise included) before the Aug 28 deadline.",

  certificationThreshold: 0.9,
};
