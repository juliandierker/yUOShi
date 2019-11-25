export function checkMulti(question, studentSolution, correctSolution) {
  const answers = question.AnswerSet;
  let falseCount = 0;

  // Get correct question from array
  if (studentSolution.length > 1) {
    studentSolution = studentSolution.filter(elem => {
      return elem.id.toString() === question.QuestionId.toString();
    });
  }

  for (let i = 0; i < answers.length; i++) {
    let answerIsSelected =
      studentSolution.length > 0
        ? studentSolution[0].values.includes(answers[i])
        : false;
    let answerIsCorrect = correctSolution.correct.includes(answers[i]);

    if (answerIsSelected != answerIsCorrect) {
      let answerNeutral =
        correctSolution.neutral !== undefined &&
        correctSolution.neutral.includes(answers[i]);
      if (!answerNeutral) {
        falseCount++;
      }
    }
  }
  let falseQuestions = [];
  if (falseCount > 0) {
    falseQuestions.push(correctSolution);
  }

  let retval = {
    falseCount,
    totalAnswerCount: answers.length,
    neutralAnswers: correctSolution.neutral,
    falseQuestions
  };

  return retval;
}
