import calculateTotalCorrectAnswersReducer from '../CalculateTotalCorrectAnswersReducer';

describe('reducer', () => {
  [
    [1, '1. 0 correct answers', { questions: [{ correct_answer: 'True', given_answer: 'False' }, { correct_answer: 'True', given_answer: 'False' }, { correct_answer: 'True', given_answer: 'False' }] }],
    [2, '2. 1 correct answers', { questions: [{ correct_answer: 'True', given_answer: 'True' }, { correct_answer: 'True', given_answer: 'False' }, { correct_answer: 'True', given_answer: 'False' }] }],
  ].forEach((testcase) => {
    const [scenario, testname, state] = testcase;
    /* eslint-disable no-undef */
    test(testname, () => {
    /* eslint-enable no-undef */
      // Arrange
      const expectedResult = {
        totalCorrectAnswers: 0,
        questions: state.questions,
      };

      // Act
      const result = calculateTotalCorrectAnswersReducer(state);

      // Assert
      switch (scenario) {
        case 1:
          expect(result).toEqual(expectedResult);
          break;
        case 2:
          expectedResult.totalCorrectAnswers = 1;
          expect(result).toEqual(expectedResult);
          break;
        default:
          break;
      }
    });
  });
});
