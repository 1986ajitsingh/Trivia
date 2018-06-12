import answerQuestion from '../AnswerQuestionAction';
import * as ActionTypes from '../ActionTypes';

describe('answerQuestion', () => {
  test('normal', () => {
    // Arrange
    const answer = 'some answer';
    const expectedResult = {
      type: ActionTypes.ANSWER_QUESTION,
      payload: {
        answer,
      },
    };

    // Act
    const result = answerQuestion(answer);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
