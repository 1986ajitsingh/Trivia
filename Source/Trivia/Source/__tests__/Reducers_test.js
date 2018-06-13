import reducer from '../Reducers';
import * as ActionTypes from '../Actions/ActionTypes';

const payloadDataForFetchQuestionSuccess = {
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
};

describe('reducer', () => {
  [
    [1, '1. ActionType = FETCH_QUESTIONS, state is undefined', undefined, { type: ActionTypes.FETCH_QUESTIONS }],
    [2, '2. ActionType = FETCH_QUESTIONS, state has some value', { someValue: 'some value' }, { type: ActionTypes.FETCH_QUESTIONS }],
    [3, '3. ActionType = FETCH_QUESTIONS_SUCCESS, state is undefined', undefined, { type: ActionTypes.FETCH_QUESTIONS_SUCCESS, payload: payloadDataForFetchQuestionSuccess }],
    [4, '4. ActionType = FETCH_QUESTIONS_SUCCESS, state has some value', { someValue: 'some value' }, { type: ActionTypes.FETCH_QUESTIONS_SUCCESS, payload: payloadDataForFetchQuestionSuccess }],
    [5, '5. ActionType = FETCH_QUESTIONS_FAIL, state is undefined', undefined, { type: ActionTypes.FETCH_QUESTIONS_FAIL }],
    [6, '6. ActionType = FETCH_QUESTIONS_FAIL, state has some value', { someValue: 'some value' }, { type: ActionTypes.FETCH_QUESTIONS_FAIL }],
    [7, '7. ActionType = ANSWER_QUESTION, state is undefined', undefined, { type: ActionTypes.ANSWER_QUESTION, payload: { questionIndex: 0, answer: 'False' } }],
    [8, '8. ActionType = ANSWER_QUESTION, state has question, and no more unanswered questions', { questions: [{ }], questionIndex: 0 }, { type: ActionTypes.ANSWER_QUESTION, payload: { answer: 'False' } }],
    [9, '9. ActionType = ANSWER_QUESTION, state has question, and has more unanswered questions', { questions: [{}, {}, {}], questionIndex: 0 }, { type: ActionTypes.ANSWER_QUESTION, payload: { answer: 'False' } }],
    [10, '10. ActionType = RESET_QUESTIONS, state is undefined', undefined, { type: ActionTypes.RESET_QUESTIONS }],
    [11, '11. ActionType = RESET_QUESTIONS, state has some value', { someValue: 'some value' }, { type: ActionTypes.RESET_QUESTIONS }],
    [12, '12. ActionType = CALCULATE_TOTAL_CORRECT_ANSWERS, state is undefined', undefined, { type: ActionTypes.CALCULATE_TOTAL_CORRECT_ANSWERS }],
    [13, '13. ActionType = CALCULATE_TOTAL_CORRECT_ANSWERS, state has some value', { questions: [{ correct_answer: 'True', given_answer: 'True' }, { correct_answer: 'True', given_answer: 'True' }, { correct_answer: 'True', given_answer: 'False' }] }, { type: ActionTypes.CALCULATE_TOTAL_CORRECT_ANSWERS }],
    [14, '14. default case, state is undefined', undefined, { type: 'some default type' }],
    [15, '15. default case, state has some value', { someValue: 'some value' }, { type: 'some default type' }],
  ].forEach((testcase) => {
    const [scenario, testname, state, action] = testcase;
    /* eslint-disable no-undef */
    test(testname, () => {
    /* eslint-enable no-undef */
      // Arrange
      const expectedResult = {
        hasMoreUnansweredQuestions: true,
        loading: true,
        questionIndex: 0,
        questions: [],
        totalCorrectAnswers: 0,
      };

      // Act
      const result = reducer(state, action);

      // Assert
      switch (scenario) {
        case 1:
          expect(result).toEqual(expectedResult);
          break;
        case 2:
          expect(result).toEqual({ loading: true, someValue: 'some value' });
          break;
        case 3:
          expectedResult.loading = false;
          expectedResult.questions = [{ category: 'cat 1', correct_answer: 'false', question: '"question 1"' }, { category: 'cat 2', correct_answer: 'false', question: 'question 2' }];
          expect(result).toEqual(expectedResult);
          break;
        case 4: {
          const expectedResultForCase = {
            loading: false,
            questions: [{ category: 'cat 1', correct_answer: 'false', question: '"question 1"' }, { category: 'cat 2', correct_answer: 'false', question: 'question 2' }],
            someValue: 'some value',
          };
          expect(result).toEqual(expectedResultForCase);
        }
          break;
        case 5:
          expectedResult.error = 'Error while fetching questions';
          expectedResult.loading = false;
          expect(result).toEqual(expectedResult);
          break;
        case 6:
          expect(result).toEqual({ error: 'Error while fetching questions', loading: false, someValue: 'some value' });
          break;
        case 7:
          expectedResult.hasMoreUnansweredQuestions = false;
          expectedResult.loading = false;
          expect(result).toEqual(expectedResult);
          break;
        case 8:
          expect(result).toEqual({
            hasMoreUnansweredQuestions: false,
            questionIndex: 0,
            questions: [{ given_answer: 'False' }],
          });
          break;
        case 9:
          expect(result).toEqual({
            hasMoreUnansweredQuestions: true,
            questionIndex: 1,
            questions: [{ given_answer: 'False' }, {}, {}],
          });
          break;
        case 10:
        case 11:
        case 12:
        case 14:
          expectedResult.loading = false;
          expectedResult.questions = [];
          expect(result).toEqual(expectedResult);
          break;
        case 13: {
          const expectedResultForCar = {
            questions: state.questions,
            totalCorrectAnswers: 2,
          };
          expect(result).toEqual(expectedResultForCar);
        }
          break;
        case 15:
          expect(result).toEqual({ someValue: 'some value' });
          break;
        default:
          break;
      }
    });
  });
});
