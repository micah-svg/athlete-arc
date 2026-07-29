import { useState } from "react";

/**
 * questions: [{
 *   id, scenario, options: [{ id, text, correct, explanation }]
 * }]
 *
 * Scenario-based, multiple plausible options, immediate feedback with
 * an explanation for whichever option the student picked (right or wrong).
 * This is the "not dumb yes/no" format.
 */
export default function ScenarioQuiz({ questions, onComplete }) {
  const [answers, setAnswers] = useState({});
  const [index, setIndex] = useState(0);

  const current = questions[index];
  const picked = answers[current.id];

  function pick(optionId) {
    if (picked) return; // lock in first choice, no re-rolling until they see feedback
    setAnswers((prev) => ({ ...prev, [current.id]: optionId }));
  }

  function next() {
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      const score = questions.filter((q) => {
        const chosen = answers[q.id];
        const opt = q.options.find((o) => o.id === chosen);
        return opt?.correct;
      }).length;
      onComplete?.({ answers, score, total: questions.length });
    }
  }

  const pickedOption = current.options.find((o) => o.id === picked);

  return (
    <div className="scenario-quiz">
      <p className="quiz-progress">Question {index + 1} of {questions.length}</p>
      <p className="scenario">{current.scenario}</p>

      <div className="options">
        {current.options.map((opt) => (
          <button
            key={opt.id}
            className={
              picked
                ? opt.id === picked
                  ? opt.correct ? "option correct" : "option incorrect"
                  : "option"
                : "option"
            }
            onClick={() => pick(opt.id)}
            disabled={!!picked}
          >
            {opt.text}
          </button>
        ))}
      </div>

      {pickedOption && (
        <div className={pickedOption.correct ? "feedback correct" : "feedback incorrect"}>
          <p>{pickedOption.correct ? "Right." : "Not quite."}</p>
          <p>{pickedOption.explanation}</p>
          <button onClick={next}>
            {index < questions.length - 1 ? "Next Question" : "Finish"}
          </button>
        </div>
      )}
    </div>
  );
}
