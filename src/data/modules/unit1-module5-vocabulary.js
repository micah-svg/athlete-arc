export const module5Vocabulary = {
  id: "unit1-mod5-vocabulary",
  unit: "Unit 1: Rules & Volleyball IQ",
  title: "Module 5: Volleyball Vocabulary",

  video: {
    youtubeId: "REPLACE_WITH_REAL_ID",
    title: "Volleyball Terms Every Player Should Know",
  },

  quiz: {
    questions: [
      {
        id: "q1",
        scenario: "Your coach yells 'nice dig!' after a play. What just happened on the court?",
        options: [
          { id: "a", text: "Someone served an ace", correct: false,
            explanation: "An ace is an unreturned serve. A dig is a defensive play against an attack, a completely different moment in the rally." },
          { id: "b", text: "Someone kept a hard-driven attack off the floor with a defensive play", correct: true,
            explanation: "Right. A dig is the defensive save that prevents a hard attack from hitting the ground." },
          { id: "c", text: "Someone scored a kill", correct: false,
            explanation: "A kill is an attack that scores immediately, the opposite side of the ball from a dig." },
        ],
      },
      {
        id: "q2",
        scenario: "The setter suddenly sends the ball over on the second contact instead of setting a hitter. What's this called?",
        options: [
          { id: "a", text: "A dump", correct: true,
            explanation: "Right, a dump is when the setter attacks or sends the ball over on the second touch instead of setting it to a hitter, often catching the defense off guard." },
          { id: "b", text: "A tip", correct: false,
            explanation: "A tip is a soft attack hit by a hitter, not a setter sending the ball over early." },
          { id: "c", text: "A pancake", correct: false,
            explanation: "A pancake is an emergency defensive save with a flat hand on the floor, unrelated to what the setter does." },
        ],
      },
      {
        id: "q3",
        scenario: "An opposing hitter barely gets her hand under a ball about to hit the floor and it pops up off the back of her flat hand. What just happened?",
        options: [
          { id: "a", text: "A pancake", correct: true,
            explanation: "Right. A pancake is exactly this: a flat hand on the floor used to keep an otherwise-dead ball alive at the last second." },
          { id: "b", text: "A dig", correct: false,
            explanation: "A dig is the broader term for any defensive save. This specific emergency floor technique has its own name: the pancake." },
          { id: "c", text: "A foot fault", correct: false,
            explanation: "A foot fault is a serving violation (stepping on/over the line), completely unrelated to this defensive play." },
        ],
      },
      {
        id: "q4",
        scenario: "You watch a serve wobble through the air with almost no spin, like a knuckleball. What kind of serve is that?",
        options: [
          { id: "a", text: "A floater", correct: true,
            explanation: "Right. A floater is a no-spin serve that wobbles unpredictably, making it hard to read and pass." },
          { id: "b", text: "An ace", correct: false,
            explanation: "An ace describes the outcome (unreturned serve, point scored), not the serve type itself. A floater could become an ace, but they're not the same thing." },
          { id: "c", text: "A side-out serve", correct: false,
            explanation: "Side-out describes winning the point off a serve you received, not a type of serve at all." },
        ],
      },
      {
        id: "q5",
        scenario: "Your team just won the point on a serve the other team received. What's the correct term for what just happened to your team?",
        options: [
          { id: "a", text: "Your team scored a side-out", correct: true,
            explanation: "Right. A side-out is when the receiving team wins the rally and gains the serve." },
          { id: "b", text: "Your team hit an ace", correct: false,
            explanation: "An ace only applies to the serving team scoring directly off an unreturned serve. This scenario describes the opposite situation." },
          { id: "c", text: "Your team committed a rotation error", correct: false,
            explanation: "A rotation error is a fault (being out of position), not a way of scoring a point." },
        ],
      },
    ],
  },

  thoughtExercise: {
    prompt:
      "Which volleyball term on this list did you not fully know before this module? Write it in your own words the way you'd explain it to a teammate.",
  },
};
