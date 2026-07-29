// Weeks 2-10 of the Technical Track. Week 1 lives in week1-passing.js.
// Each week: preWork (video + a scenario quiz question + a baseline self-rating)
// and postWork (a reflection self-rating comparing to the pre-work baseline).

export const week2ServeReceive = {
  id: "tech-week2-servereceive",
  title: "Week 2: Serve Receive & Reading the Serve",
  preWork: {
    video: { youtubeId: "REPLACE_WITH_REAL_ID", title: "Reading the Serve Before It Arrives" },
    quiz: {
      questions: [
        {
          id: "q1",
          scenario: "The server tosses the ball low and it starts wobbling with almost no spin as it crosses the net. What should you expect?",
          options: [
            { id: "a", text: "A predictable, easy-to-read serve", correct: false,
              explanation: "A no-spin, wobbling serve (a floater) is actually one of the harder serves to read consistently, it moves unpredictably in the air." },
            { id: "b", text: "A floater that may move unpredictably right up until contact", correct: true,
              explanation: "Right. Floaters are read by watching the ball's path all the way in, not by predicting early, since they can shift direction late." },
            { id: "c", text: "A serve that's automatically going out of bounds", correct: false,
              explanation: "Spin and wobble don't tell you in/out on their own. Track the whole flight path instead of assuming based on the toss." },
          ],
        },
      ],
    },
    selfAssessment: { skillLabel: "serve receive", prompt: "Before this week's practices: how confident are you reading and passing serves right now?" },
  },
  postWork: {
    selfAssessment: { skillLabel: "serve receive", prompt: "After this week's reps: how did your serve receive feel under game speed? What's different from your pre-work rating?" },
  },
};

export const week3Setting = {
  id: "tech-week3-setting",
  title: "Week 3: Setting Fundamentals",
  preWork: {
    video: { youtubeId: "REPLACE_WITH_REAL_ID", title: "Setting Hand Shape & Footwork" },
    quiz: {
      questions: [
        {
          id: "q1",
          scenario: "A pass comes in slightly off the net, further from the setter's ideal target than usual. What's the right priority?",
          options: [
            { id: "a", text: "Get your feet moving early to get square to the target before the ball arrives", correct: true,
              explanation: "Right. Footwork getting you into position early is what makes a clean, consistent set possible, even off an imperfect pass." },
            { id: "b", text: "Stay in one spot and just reach further with your hands", correct: false,
              explanation: "Reaching instead of moving your feet usually costs accuracy and consistency, especially off an imperfect pass." },
            { id: "c", text: "Let the ball come to you and set from wherever it lands", correct: false,
              explanation: "Passive positioning gives up control over where the set actually goes. Moving to the ball is part of setting, not optional." },
          ],
        },
      ],
    },
    selfAssessment: { skillLabel: "setting", prompt: "Before this week's practices: how confident are you in your setting hand shape and footwork right now?" },
  },
  postWork: {
    selfAssessment: { skillLabel: "setting", prompt: "After this week's reps: how did your sets feel under game speed? What's different from your pre-work rating?" },
  },
};

export const week4Serving = {
  id: "tech-week4-serving",
  title: "Week 4: Serving for Consistency",
  preWork: {
    video: { youtubeId: "REPLACE_WITH_REAL_ID", title: "Serving for Consistency, Not Just Power" },
    quiz: {
      questions: [
        {
          id: "q1",
          scenario: "You have a serve that's powerful but only goes in about 60% of the time. What should this week's focus actually be?",
          options: [
            { id: "a", text: "Add even more power to make it harder to pass", correct: false,
              explanation: "More power on an inconsistent serve usually means more errors, not more points. Consistency is the priority before adding more power." },
            { id: "b", text: "Dial back toward a consistent toss and contact point until the serve is reliable, then build power back in", correct: true,
              explanation: "Right. A serve that goes in 90% of the time at moderate power beats one that goes in 60% of the time at max power, virtually every time, over a season." },
            { id: "c", text: "Switch serve types every single time to keep the opponent guessing", correct: false,
              explanation: "Constantly switching serve types before building consistency in any one of them usually makes every serve less reliable, not more effective." },
          ],
        },
      ],
    },
    selfAssessment: { skillLabel: "serving consistency", prompt: "Before this week's practices: out of 10 serves, how many do you expect to go in right now?" },
  },
  postWork: {
    selfAssessment: { skillLabel: "serving consistency", prompt: "After this week's reps: out of 10 serves, how many actually went in during practice? What's different from your pre-work estimate?" },
  },
};

export const week5Attacking = {
  id: "tech-week5-attacking",
  title: "Week 5: Attacking Approach & Arm Swing",
  preWork: {
    video: { youtubeId: "REPLACE_WITH_REAL_ID", title: "Approach Timing & Arm Swing Mechanics" },
    quiz: {
      questions: [
        {
          id: "q1",
          scenario: "You're consistently arriving at the ball either too early or too late to hit it at the peak of your jump. What's most likely off?",
          options: [
            { id: "a", text: "Your approach timing relative to the set", correct: true,
              explanation: "Right. Arriving early or late is almost always a timing issue between when the approach starts and when the set arrives, not a strength or jump-height problem." },
            { id: "b", text: "You're not jumping high enough", correct: false,
              explanation: "Jump height affects how high you hit, not when you arrive at the ball. Timing is the more likely culprit for an early/late approach." },
            { id: "c", text: "The setter is doing something wrong every time", correct: false,
              explanation: "While set quality varies, consistently mistimed approaches on your end are usually about your own timing, not the setter." },
          ],
        },
      ],
    },
    selfAssessment: { skillLabel: "attacking approach", prompt: "Before this week's practices: how confident are you in your approach timing and arm swing right now?" },
  },
  postWork: {
    selfAssessment: { skillLabel: "attacking approach", prompt: "After this week's reps: how did your timing feel under game speed? What's different from your pre-work rating?" },
  },
};

export const week6Blocking = {
  id: "tech-week6-blocking",
  title: "Week 6: Blocking Fundamentals",
  preWork: {
    video: { youtubeId: "REPLACE_WITH_REAL_ID", title: "Blocking Footwork & Hand Positioning" },
    quiz: {
      questions: [
        {
          id: "q1",
          scenario: "You keep getting to the block late, arriving just after the hitter has already jumped. What should you focus on this week?",
          options: [
            { id: "a", text: "Reading the set earlier so your footwork starts sooner", correct: true,
              explanation: "Right. Late blocks are usually a reaction-time issue, reading the set (height, speed, location) earlier gives your feet a head start." },
            { id: "b", text: "Jumping higher to compensate", correct: false,
              explanation: "Jump height doesn't fix late timing, it's a different problem. Reading the play earlier is what actually closes the timing gap." },
            { id: "c", text: "Standing closer to the net at all times", correct: false,
              explanation: "Standing closer doesn't address a timing problem and can create other positioning issues. Reading the set earlier is the real fix." },
          ],
        },
      ],
    },
    selfAssessment: { skillLabel: "blocking", prompt: "Before this week's practices: how confident are you in your blocking footwork and timing right now?" },
  },
  postWork: {
    selfAssessment: { skillLabel: "blocking", prompt: "After this week's reps: how did your blocking timing feel under game speed? What's different from your pre-work rating?" },
  },
};

export const week7Defense = {
  id: "tech-week7-defense",
  title: "Week 7: Defense & Digging",
  preWork: {
    video: { youtubeId: "REPLACE_WITH_REAL_ID", title: "Athletic Stance & Digging Fundamentals" },
    quiz: {
      questions: [
        {
          id: "q1",
          scenario: "You're consistently a half-step late getting to balls in defense. What's the most likely fix?",
          options: [
            { id: "a", text: "A lower, more ready athletic stance before the attack happens", correct: true,
              explanation: "Right. Being flat-footed or standing too upright before the attack costs reaction time. A low, ready stance closes that gap." },
            { id: "b", text: "Standing further back to give yourself more time", correct: false,
              explanation: "Standing further back can actually reduce your ability to close on shorter balls. Stance and readiness matter more than court depth here." },
            { id: "c", text: "Nothing, a half-step late is just bad luck", correct: false,
              explanation: "Consistent lateness is a pattern, not luck, and it's almost always fixable through stance and anticipation." },
          ],
        },
      ],
    },
    selfAssessment: { skillLabel: "defense", prompt: "Before this week's practices: how confident are you in your defensive stance and reaction time right now?" },
  },
  postWork: {
    selfAssessment: { skillLabel: "defense", prompt: "After this week's reps: how did your defense feel under game speed? What's different from your pre-work rating?" },
  },
};

export const week8Transition = {
  id: "tech-week8-transition",
  title: "Week 8: Transition & Team Movement",
  preWork: {
    video: { youtubeId: "REPLACE_WITH_REAL_ID", title: "Moving as a Unit After Every Contact" },
    quiz: {
      questions: [
        {
          id: "q1",
          scenario: "Your team just blocked a ball back to the opponent. What should everyone be doing immediately after?",
          options: [
            { id: "a", text: "Stand still and watch to see what happens next", correct: false,
              explanation: "Standing still after a block wastes the transition window. Every player has a next spot to move to immediately." },
            { id: "b", text: "Immediately transition to their next defensive or offensive spot for the following contact", correct: true,
              explanation: "Right. Good teams move as a unit after every single contact, resetting into position for whatever comes next, not just reacting after the ball arrives." },
            { id: "c", text: "Only the player closest to the ball needs to move", correct: false,
              explanation: "Transition is a whole-team responsibility. If only one player resets, the rest of the court is out of position for the next play." },
          ],
        },
      ],
    },
    selfAssessment: { skillLabel: "transition movement", prompt: "Before this week's practices: how confident are you in moving to your next spot immediately after every contact?" },
  },
  postWork: {
    selfAssessment: { skillLabel: "transition movement", prompt: "After this week's reps: how did your transitions feel under game speed? What's different from your pre-work rating?" },
  },
};

export const week9Communication = {
  id: "tech-week9-communication",
  title: "Week 9: Communication & Court Awareness",
  preWork: {
    video: { youtubeId: "REPLACE_WITH_REAL_ID", title: "Calling the Ball & Court Awareness" },
    quiz: {
      questions: [
        {
          id: "q1",
          scenario: "Two teammates both go for the same ball in serve receive and nearly collide. What's the most likely root cause?",
          options: [
            { id: "a", text: "Bad court positioning that can't be fixed", correct: false,
              explanation: "Positioning matters, but this specific collision pattern is almost always a communication gap, not a positioning flaw that can't be corrected." },
            { id: "b", text: "Nobody called the ball out loud early enough", correct: true,
              explanation: "Right. Calling the ball ('mine!' or a teammate's name) early is what prevents this exact collision. It's a learnable habit, not chance." },
            { id: "c", text: "The serve was simply too good to receive cleanly", correct: false,
              explanation: "A tough serve can cause a bad pass, but a near-collision between two teammates specifically points to a communication gap." },
          ],
        },
      ],
    },
    selfAssessment: { skillLabel: "communication", prompt: "Before this week's practices: how confident are you in calling the ball and communicating with teammates right now?" },
  },
  postWork: {
    selfAssessment: { skillLabel: "communication", prompt: "After this week's reps: how did your communication feel under game speed? What's different from your pre-work rating?" },
  },
};

export const week10Pressure = {
  id: "tech-week10-pressure",
  title: "Week 10: Competing Under Pressure",
  preWork: {
    video: { youtubeId: "REPLACE_WITH_REAL_ID", title: "Staying Composed in Close Sets" },
    quiz: {
      questions: [
        {
          id: "q1",
          scenario: "It's 23-23 in a close set and you just made an error. What's the most useful next thought?",
          options: [
            { id: "a", text: "Dwelling on the mistake to make sure you understand exactly how bad it was", correct: false,
              explanation: "Dwelling mid-rally-sequence doesn't help the next point and often makes the next error more likely, not less." },
            { id: "b", text: "A quick reset: the error already happened, the next point is a clean slate", correct: true,
              explanation: "Right. Competing under pressure is largely about how fast you can reset after a mistake, not about never making one." },
            { id: "c", text: "Assuming the set is already lost", correct: false,
              explanation: "A tied score at 23-23 is not a lost set. Assuming the outcome before it happens tends to become a self-fulfilling pattern." },
          ],
        },
      ],
    },
    selfAssessment: { skillLabel: "composure under pressure", prompt: "Before this week's practices: how confident are you in staying composed after a mistake in a close set right now?" },
  },
  postWork: {
    selfAssessment: { skillLabel: "composure under pressure", prompt: "After this week's reps: how did your composure feel in competitive drills? What's different from your pre-work rating?" },
  },
};
