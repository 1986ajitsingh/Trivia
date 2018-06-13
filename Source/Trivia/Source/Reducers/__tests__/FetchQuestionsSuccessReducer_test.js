import fetchQuestionsSuccessReducer from '../FetchQuestionsSuccessReducer';

describe('answerQuestion', () => {
  test('normal', () => {
    // Arrange
    const state = {};
    const action = {
      payload: {
        data: {
          results: [
            {
              category: 'cat 1', correct_answer: 'false', question: '&quot;question 1&quot;', extraField1: '1', extraField2: '2',
            },
            {
              category: 'cat 2', correct_answer: 'false', question: 'question 2', extraField1: '1', extraField2: '2',
            },
          ],
        },
      },
    };
    const expectedResult = {
      loading: false,
      questions: [{ category: 'cat 1', correct_answer: 'false', question: '"question 1"' }, { category: 'cat 2', correct_answer: 'false', question: 'question 2' }],
    };

    // Act
    const result = fetchQuestionsSuccessReducer(state, action);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
