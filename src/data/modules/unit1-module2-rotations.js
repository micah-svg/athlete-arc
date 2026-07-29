export const module2RotationsPositions = {
  id: "unit1-mod2-rotations",
  unit: "Unit 1: Rules & Volleyball IQ",
  title: "Module 2: Rotations & Positions",

  video: {
    youtubeId: "REPLACE_WITH_REAL_ID",
    title: "Rotations & Court Positions Explained",
  },

  quiz: {
    questions: [
      {
        id: "q1",
        scenario: "Your team just won the serve (side-out) after the other team served it out. What happens to your lineup?",
        options: [
          { id: "a", text: "Everyone stays exactly where they were", correct: false,
            explanation: "Winning the serve triggers a rotation. Nobody stays put." },
          { id: "b", text: "All six players rotate one spot clockwise before the next serve", correct: true,
            explanation: "Right. Every time a team gains the serve (a side-out), the whole lineup shifts one position clockwise." },
          { id: "c", text: "Only the server rotates, everyone else stays", correct: false,
            explanation: "It's the whole lineup that rotates, not just the server. That's what keeps everyone cycling through every position over a set." },
        ],
      },
      {
        id: "q2",
        scenario: "You're a back-row player and the ball comes to you in front of the 10-foot line. You want to attack it hard over the net. What's legal?",
        options: [
          { id: "a", text: "Jump and attack it from anywhere, front row rules don't apply to you", correct: false,
            explanation: "Back-row players are restricted from attacking the ball above net height while their feet are in front of that line." },
          { id: "b", text: "You can jump from behind the 10-foot line, attack it, and land in front of the line", correct: true,
            explanation: "Right. What matters is where your feet leave the ground, not where you land. Takeoff behind the line is legal." },
          { id: "c", text: "Back-row players can never attack the ball, period", correct: false,
            explanation: "They can attack, they just can't take off in front of the 10-foot line to do it above net height." },
        ],
      },
      {
        id: "q3",
        scenario: "The ref calls an overlap/positional fault on your team right before the serve. What likely happened?",
        options: [
          { id: "a", text: "Someone was standing out of their required order relative to teammates at the moment of serve", correct: true,
            explanation: "Exactly. Players have to be lined up in the correct order side-to-side and front-to-back relative to their immediate neighbors at the moment the ball is served." },
          { id: "b", text: "Someone touched the net during a rally", correct: false,
            explanation: "That's a net violation, a different fault entirely, and it happens during play, not at serve." },
          { id: "c", text: "The serve went out of bounds", correct: false,
            explanation: "An out-of-bounds serve is just a service error, not a positional/overlap fault." },
        ],
      },
      {
        id: "q4",
        scenario: "Right after the ball is served, why do you see players sprinting to spots that look totally different from where they were lined up?",
        options: [
          { id: "a", text: "They're supposed to stay exactly where they lined up for the whole rally", correct: false,
            explanation: "The lineup requirement only applies at the exact moment of serve. Once the ball is served, players are free to move to their actual assignment." },
          { id: "b", text: "The lineup rule only applies at the moment of serve, after that everyone releases to their real defensive or offensive spot", correct: true,
            explanation: "Right. That instant scramble you see is completely legal, players are moving from their required serve-order position to where they actually need to be to play." },
          { id: "c", text: "That's a rules violation happening live", correct: false,
            explanation: "It's the opposite, it's required and intentional. The positioning rule is over the moment the ball leaves the server's hand." },
        ],
      },
    ],
  },

  thoughtExercise: {
    prompt:
      "Think about your primary rotation spot on this team. What's one thing about that specific spot (front row vs back row, which direction you rotate from and to) that you need to be sharper on?",
  },
};
