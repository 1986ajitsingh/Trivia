import resetQuestions from '../ResetQuestionsAction';
import * as ActionTypes from '../ActionTypes';

describe('resetQuestions', () => {
  test('normal', () => {
    // Arrange
    const expectedResult = {
      type: ActionTypes.RESET_QUESTIONS,
      payload: {},
    };

    // Act
    const result = resetQuestions();

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
