function answerQuestion(questions, questionIndex, answer) {
  const question = (questions || [])[questionIndex];
  (question || {}).given_answer = (answer || '');
  return questions;
}

export default function answerQuestionReducer(state, action) {
  const { questionIndex, questions } = state;
  const { answer } = action.payload;

  let hasMoreUnansweredQuestions = true;
  let nextQuestionIndex = 0;
  if (questionIndex < (questions.length - 1)) {
    nextQuestionIndex = questionIndex + 1;
  } else {
    hasMoreUnansweredQuestions = false;
  }

  return {
    ...state,
    questions: answerQuestion(
      questions,
      questionIndex,
      answer,
    ),
    hasMoreUnansweredQuestions,
    questionIndex: nextQuestionIndex,
  };
}
