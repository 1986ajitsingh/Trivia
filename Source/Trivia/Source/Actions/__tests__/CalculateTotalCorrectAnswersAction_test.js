import calculateTotalCorrectAnswers from '../CalculateTotalCorrectAnswersAction';
import * as ActionTypes from '../ActionTypes';

describe('calculateTotalCorrectAnswers', () => {
  test('normal', () => {
    // Arrange
    const expectedResult = {
      type: ActionTypes.CALCULATE_TOTAL_CORRECT_ANSWERS,
      payload: {},
    };

    // Act
    const result = calculateTotalCorrectAnswers();

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
