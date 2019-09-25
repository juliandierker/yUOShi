export function checkMulti(question, studentSolution, correctSolution) {
  const answers = question.AnswerSet;
  let falseCount = 0;

  for (let i = 0; i < answers.length; i++) {
    let answerIsSelected = studentSolution[0].values.includes(answers[i]);
    let answerIsCorrect = correctSolution.sol.includes(answers[i]);

    if (answerIsSelected != answerIsCorrect) {
      falseCount++;
    }
  }
  let falseQuestions = [];
  if (falseCount > 0) {
    falseQuestions.push(correctSolution);
  }

  let retval = {
    falseCount,
    totalAnswerCount: answers.length,
    falseQuestions
  };
  return retval;
}
