export const electiveE3InjuryPrevention = {
  id: "elective-e3-injury-prevention",
  unit: "Elective: Injury Prevention",
  title: "E3: Injury Prevention",

  video: {
    youtubeId: "REPLACE_WITH_REAL_ID",
    title: "Warming Up Right & Recognizing Warning Signs",
  },

  quiz: {
    questions: [
      {
        id: "q1",
        scenario: "Right before practice starts, what's the most useful kind of warm-up?",
        options: [
          { id: "a", text: "Long static stretches held for a minute or more, done cold", correct: false,
            explanation: "Static stretching on cold muscles isn't the most useful pre-practice warm-up. Dynamic movement that raises heart rate and prepares the body for jumping and lateral movement works better." },
          { id: "b", text: "Dynamic movement that raises heart rate and prepares the body for jumping and cutting", correct: true,
            explanation: "Right. A real warm-up actively prepares the body for the specific movements of practice, not just going through the motions." },
          { id: "c", text: "Skipping warm-up on days when you feel fine already", correct: false,
            explanation: "Warm-up matters regardless of how you feel walking in. It's about preparing the body, not just addressing how you currently feel." },
        ],
      },
      {
        id: "q2",
        scenario: "You've had soreness in the same spot for two weeks that isn't improving with rest. What should you do?",
        options: [
          { id: "a", text: "Keep playing through it since it's probably nothing", correct: false,
            explanation: "Persistent soreness that isn't improving over time is exactly the kind of thing that's worth reporting, not playing through." },
          { id: "b", text: "Report it to the coach or athletic trainer", correct: true,
            explanation: "Right. Small things caught early tend to stay small. The same thing ignored for weeks is how minor issues become serious ones." },
          { id: "c", text: "Wait until it actually stops you from playing before saying anything", correct: false,
            explanation: "Waiting until it's serious enough to stop play means waiting too long. Early reporting is the whole point of prevention." },
        ],
      },
      {
        id: "q3",
        scenario: "A teammate has started moving noticeably differently (a new limp, favoring one side) but hasn't said anything to the coach. What's the right move?",
        options: [
          { id: "a", text: "Assume she'd say something if it mattered", correct: false,
            explanation: "Athletes, especially teenagers, sometimes downplay or hide things they're worried about. Noticing a change is worth mentioning, not assuming away." },
          { id: "b", text: "Encourage her to tell the coach or athletic trainer, or mention what you noticed yourself", correct: true,
            explanation: "Right. A changed movement pattern is a real warning sign. Encouraging her to speak up, or flagging it yourself, is looking out for a teammate." },
          { id: "c", text: "Say nothing, it's not your place to notice things about a teammate's body", correct: false,
            explanation: "This isn't about commenting on her body, it's about a safety-relevant change in how she's moving, which is worth flagging to the right adult." },
        ],
      },
    ],
  },

  thoughtExercise: {
    prompt:
      "Is there anything, even minor, that you've been playing through this season without mentioning it? What would it look like to say something about it this week?",
  },
};
