import answerQuestionReducer from '../AnswerQuestionReducer';

describe('reducer', () => {
  [
    [1, '1. state has question, and no more unanswered questions', { questions: [{ }], questionIndex: 0 }, { payload: { answer: 'False' } }],
    [2, '2. state has question, and has more unanswered questions', { questions: [{}, {}, {}], questionIndex: 0 }, { payload: { answer: 'False' } }],
  ].forEach((testcase) => {
    const [scenario, testname, state, action] = testcase;
    /* eslint-disable no-undef */
    test(testname, () => {
    /* eslint-enable no-undef */
      // Arrange
      const expectedResult = {
        hasMoreUnansweredQuestions: true,
        questionIndex: 0,
        questions: state.questions,
      };

      // Act
      const result = answerQuestionReducer(state, action);

      // Assert
      switch (scenario) {
        case 1:
          expectedResult.hasMoreUnansweredQuestions = false;
          expect(result).toEqual(expectedResult);
          break;
        case 2:
          expectedResult.hasMoreUnansweredQuestions = true;
          expectedResult.questionIndex = 1;
          expect(result).toEqual(expectedResult);
          break;
        default:
          break;
      }
    });
  });
});
