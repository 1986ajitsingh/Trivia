export default function calculateTotalCorrectAnswersReducer(state) {
  const { questions } = state;
  let totalCorrectAnswers = 0;

  (questions || []).forEach((question) => {
    if (question.correct_answer === question.given_answer) {
      totalCorrectAnswers += 1;
    }
  });

  return {
    ...state,
    totalCorrectAnswers,
  };
}
