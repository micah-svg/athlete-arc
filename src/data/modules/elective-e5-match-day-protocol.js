export const electiveE5MatchDayProtocol = {
  id: "elective-e5-match-day-protocol",
  unit: "Elective: Pre-Match & Match-Day Protocol",
  title: "E5: Pre-Match & Match-Day Protocol",

  video: {
    youtubeId: "REPLACE_WITH_REAL_ID",
    title: "The Full Match-Day Sequence",
  },

  quiz: {
    questions: [
      {
        id: "q1",
        scenario: "It's a home match. Whose job is it to set up the nets and equipment?",
        options: [
          { id: "a", text: "The varsity team handles all setup", correct: false,
            explanation: "On home games, the JV2 team is responsible for setting up nets and equipment before anything else happens." },
          { id: "b", text: "The JV2 team, before anything else happens", correct: true,
            explanation: "Right. Setup is the team's own job, not something that happens on its own or is someone else's responsibility." },
          { id: "c", text: "Whoever gets there first", correct: false,
            explanation: "It's a team responsibility, not a first-come task for whoever happens to arrive early." },
        ],
      },
      {
        id: "q2",
        scenario: "During the match, a parent waves from the stands trying to get an athlete's attention on the bench. What's the correct response?",
        options: [
          { id: "a", text: "Wave back quickly, it's not a big deal", correct: false,
            explanation: "Once warm-ups start, there's no interacting with parents or friends in the stands until the match and post-match sequence are fully over." },
          { id: "b", text: "Stay focused on the team and the match, no interaction with the stands until the match is fully over", correct: true,
            explanation: "Right. Being 'in the zone' means being present with the team the entire time, not splitting attention between the court and the bleachers." },
          { id: "c", text: "Go over and say a quick hello during a timeout", correct: false,
            explanation: "Timeouts are still game time, not social time. The no-stands-interaction rule applies through timeouts too, not just live play." },
        ],
      },
      {
        id: "q3",
        scenario: "A player goes down with an injury during the match. What's the team's job in that moment?",
        options: [
          { id: "a", text: "Crowd around to see what happened", correct: false,
            explanation: "Crowding the situation gets in the way. The team's job is to give the athletic trainer and coaching staff room to work." },
          { id: "b", text: "Stay calm, give the athletic trainer and coaching staff room, and follow their direction", correct: true,
            explanation: "Right. Staying calm and following the coaching staff's lead is the correct response, not reacting or getting in the way." },
          { id: "c", text: "Immediately start filming it on a phone", correct: false,
            explanation: "This isn't appropriate in any injury situation and directly conflicts with the no-cell-phone rule during match time anyway." },
        ],
      },
      {
        id: "q4",
        scenario: "The match just ended. What's the very next thing that should happen, before anything else?",
        options: [
          { id: "a", text: "Head straight to the locker room", correct: false,
            explanation: "Before heading anywhere, the team high-fives the other team and shakes officials' hands, thanking them out loud." },
          { id: "b", text: "High-five the other team and shake officials' hands, thanking them verbally", correct: true,
            explanation: "Right. This is the very first step in the post-match sequence, before gear collection or heading to the locker room." },
          { id: "c", text: "Immediately check phones for messages from the match", correct: false,
            explanation: "Phones stay off through the entire post-match sequence, including watching the first set of varsity." },
        ],
      },
      {
        id: "q5",
        scenario: "The team just finished watching the first set of the varsity match together. What has to happen before a player can leave?",
        options: [
          { id: "a", text: "Nothing, players can leave whenever they want at this point", correct: false,
            explanation: "Players still need to check in and sign out with the coach before heading home, even after the first varsity set ends." },
          { id: "b", text: "Check in and sign out with the coach first", correct: true,
            explanation: "Right. After the first varsity set, players may go home, but only after checking in and signing out with the coach." },
          { id: "c", text: "Just tell a teammate you're leaving", correct: false,
            explanation: "Sign-out has to happen with the coach specifically, not informally with a teammate." },
        ],
      },
    ],
  },

  thoughtExercise: {
    prompt:
      "Walk through the full match-day sequence in your own words, from arrival to sign-out. Which step do you think will be easiest to forget, and how will you remind yourself?",
  },
};
