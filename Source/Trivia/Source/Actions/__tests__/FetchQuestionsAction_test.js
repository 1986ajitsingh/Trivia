import fetchQuestions from '../FetchQuestionsAction';
import * as ActionTypes from '../ActionTypes';
import * as APIUtils from '../../Utils/APIUtils';

describe('fetchQuestions', () => {
  test('normal', () => {
    // Arrange
    const expectedResult = {
      type: ActionTypes.FETCH_QUESTIONS,
      payload: {
        request: {
          url: APIUtils.FETCH_QUESTIONS_URI,
        },
      },
    };

    // Act
    const result = fetchQuestions();

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
