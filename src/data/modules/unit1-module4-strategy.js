export const module4BasicStrategy = {
  id: "unit1-mod4-strategy",
  unit: "Unit 1: Rules & Volleyball IQ",
  title: "Module 4: Basic Team Strategy",

  video: {
    youtubeId: "REPLACE_WITH_REAL_ID",
    title: "Reading the Game: Basic Strategy Concepts",
  },

  quiz: {
    questions: [
      {
        id: "q1",
        scenario:
          "You're back row on defense. The other team's setter gets a clean pass and both her hands come up quick and low near the net. What should you anticipate?",
        options: [
          { id: "a", text: "A slow, high back-row attack is coming", correct: false,
            explanation: "A quick, low set usually means a fast middle attack, not a slow back-row option. Read the set speed, not just where the setter is standing." },
          { id: "b", text: "A quick set to the middle attacker is likely, so be ready for a fast tempo", correct: true,
            explanation: "Right. A low, quick set almost always feeds a quick middle attack. Reading the set's speed and height gives your defense a head start." },
          { id: "c", text: "It doesn't matter, defense should always be in the same base position", correct: false,
            explanation: "Good defense adjusts to what the set is telling you. Staying static regardless of the play gives up a read advantage." },
        ],
      },
      {
        id: "q2",
        scenario: "Your team is serving. Where's a smart place to target the serve against a team with one clearly weaker passer?",
        options: [
          { id: "a", text: "Serve it straight at the other team's best passer to test them", correct: false,
            explanation: "That plays into the opponent's strength. Smart serving targets the weaker link, not the strongest one." },
          { id: "b", text: "Serve at the seam between two passers or right at the weaker passer", correct: true,
            explanation: "Right. Seams (the gap between two passers) and known weaker passers are classic serving targets because they create the best odds of a rough pass." },
          { id: "c", text: "Serve it exactly the same way every time regardless of who's back there", correct: false,
            explanation: "Predictable serving gives up a strategic edge. Varying target and type based on who's receiving is basic serving strategy." },
        ],
      },
      {
        id: "q3",
        scenario: "As a blocker, you notice the opposing hitter always looks at the block before swinging and consistently hits away from wherever you're standing. What's a good adjustment?",
        options: [
          { id: "a", text: "Keep blocking the exact same spot every time", correct: false,
            explanation: "If a hitter is reading your position and hitting around it, staying static just keeps giving up easy points." },
          { id: "b", text: "Show one position late and shift right before contact to take away where she's looking to go", correct: true,
            explanation: "Right. Disguising your position and moving late is a real blocking strategy against hitters who read blocks well." },
          { id: "c", text: "Stop blocking that hitter entirely", correct: false,
            explanation: "Giving up on blocking isn't a strategy adjustment, it's giving up the point before it happens." },
        ],
      },
    ],
  },

  thoughtExercise: {
    prompt:
      "Pick one thing you could start reading earlier in a rally, either on offense (the block) or defense (the set), that would help you react faster instead of just reacting to the ball after contact.",
  },
};
