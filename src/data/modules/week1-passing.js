// Sample module: Unit 2 (Technical Track), Week 1 — Passing & Platform
// This is the pattern for every module going forward: content lives here as
// data, components stay generic and reusable.

export const week1Passing = {
  id: "tech-week1-passing",
  title: "Week 1: Passing & Platform",

  preWork: {
    video: {
      youtubeId: "REPLACE_WITH_REAL_ID",
      title: "Platform Fundamentals",
    },
    quiz: {
      questions: [
        {
          id: "q1",
          scenario:
            "The serve is coming in low and hard, right at your hips. What's the right first move?",
          options: [
            { id: "a", text: "Swing your arms up to meet the ball", correct: false,
              explanation: "Swinging adds unpredictable power. A stable platform, not a swing, controls a hard serve." },
            { id: "b", text: "Drop your center of gravity and get your platform under the ball", correct: true,
              explanation: "Right. Getting low and square lets the ball rebound off a stable platform toward your target." },
            { id: "c", text: "Step back and let it go", correct: false,
              explanation: "A serve inside the court has to be played. Backing away turns a passable ball into a point against your team." },
          ],
        },
      ],
    },
    selfAssessment: {
      skillLabel: "passing platform",
      prompt: "Before this week's practices: how confident is your passing platform right now?",
    },
  },

  postWork: {
    selfAssessment: {
      skillLabel: "passing platform",
      prompt: "After this week's reps: how did your platform feel under game speed? What's different from your pre-work rating?",
    },
  },
};
