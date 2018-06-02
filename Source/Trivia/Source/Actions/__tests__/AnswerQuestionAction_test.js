import answerQuestion from '../AnswerQuestionAction';
import * as ActionTypes from '../ActionTypes';

describe('answerQuestion', () => {
  test('normal', () => {
    // Arrange
    const questionIndex = 99; // 99 is some test value
    const answer = 'some answer';
    const expectedResult = {
      type: ActionTypes.ANSWER_QUESTION,
      payload: {
        questionIndex,
        answer,
      },
    };

    // Act
    const result = answerQuestion(questionIndex, answer);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
