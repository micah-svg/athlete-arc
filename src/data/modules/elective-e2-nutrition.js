export const electiveE2Nutrition = {
  id: "elective-e2-nutrition",
  unit: "Elective: Nutrition for Athletes",
  title: "E2: Nutrition for Athletes",

  video: {
    youtubeId: "REPLACE_WITH_REAL_ID",
    title: "Fueling Before, During, and After Practices & Matches",
  },

  quiz: {
    questions: [
      {
        id: "q1",
        scenario: "Practice starts right after school. What's the smartest snack choice beforehand?",
        options: [
          { id: "a", text: "A big greasy meal to make sure you have plenty of energy", correct: false,
            explanation: "Heavy, greasy meals sit poorly right before running and jumping. Easy-to-digest carbs with a little protein work much better." },
          { id: "b", text: "A banana with peanut butter, or something similar: easy carbs plus a little protein", correct: true,
            explanation: "Right. Easy-to-digest carbs with some protein, eaten with enough time to digest, is the sweet spot before practice." },
          { id: "c", text: "Nothing, it's better to practice on an empty stomach", correct: false,
            explanation: "Skipping food before practice generally hurts performance and energy, it isn't a performance strategy." },
        ],
      },
      {
        id: "q2",
        scenario: "It's match day. What's the right approach to food that day?",
        options: [
          { id: "a", text: "Try a new food or restaurant you've never had before, since it's a special occasion", correct: false,
            explanation: "Match day is not the day to experiment. Stick with familiar foods your body already knows how to handle before competing." },
          { id: "b", text: "Stick with familiar foods you've eaten before big efforts in the past", correct: true,
            explanation: "Right. Familiar, tested foods reduce the risk of an upset stomach or energy crash during competition." },
          { id: "c", text: "Skip breakfast and lunch to feel lighter for the match", correct: false,
            explanation: "Under-fueling before a match generally hurts performance rather than helping it." },
        ],
      },
      {
        id: "q3",
        scenario: "A teammate says she's going to \"eat less\" this week to feel lighter and jump higher. What's the accurate response?",
        options: [
          { id: "a", text: "That's a smart strategy for jumping higher", correct: false,
            explanation: "Restricting food during a competitive season can actually hurt both performance and development, and it's a pattern worth being cautious about, not encouraging." },
          { id: "b", text: "Restricting food during the season isn't a performance strategy, and it's worth a conversation with a trusted adult, not encouragement", correct: true,
            explanation: "Right. Growing, training bodies need consistent fuel. A teammate talking about restricting food is worth taking seriously and mentioning to a coach or parent, not cheering on." },
          { id: "c", text: "It's none of your business either way", correct: false,
            explanation: "A teammate's health and safety is worth caring about. This doesn't mean confronting her, but it does mean it's reasonable to be concerned and to loop in a trusted adult." },
        ],
      },
      {
        id: "q4",
        scenario: "After a hard practice, what helps recovery most?",
        options: [
          { id: "a", text: "Skipping food until you're not hungry anymore", correct: false,
            explanation: "Recovery actually depends on refueling with protein and carbs relatively soon after training, not avoiding food." },
          { id: "b", text: "A combination of protein and carbs, like chocolate milk or yogurt with granola", correct: true,
            explanation: "Right. Protein plus carbs after training supports muscle recovery." },
          { id: "c", text: "Only protein, no carbs at all", correct: false,
            explanation: "Recovery works best with both protein and carbs together, not protein alone." },
        ],
      },
    ],
  },

  thoughtExercise: {
    prompt:
      "Think about what you usually eat before and after practice. Based on what this module covered, is there one small change that could help you feel better by the second hour of practice?",
  },
};
