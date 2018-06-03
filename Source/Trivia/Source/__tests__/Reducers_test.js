import reducer from '../Reducers';
import * as ActionTypes from '../Actions/ActionTypes';

describe('_filteringThermoStateDevices', () => {
  [
    [1, '1. ActionType = FETCH_QUESTIONS, state is undefined', undefined, { type: ActionTypes.FETCH_QUESTIONS }],
    [2, '2. ActionType = FETCH_QUESTIONS, state has some value', { someValue: 'some value' }, { type: ActionTypes.FETCH_QUESTIONS }],
    [3, '3. ActionType = FETCH_QUESTIONS_SUCCESS, state is undefined', undefined, { type: ActionTypes.FETCH_QUESTIONS_SUCCESS, payload: { data: { results: 'some results' } } }],
    [4, '4. ActionType = FETCH_QUESTIONS_SUCCESS, state has some value', { someValue: 'some value' }, { type: ActionTypes.FETCH_QUESTIONS_SUCCESS, payload: { data: { results: 'some results' } } }],
    [5, '5. ActionType = FETCH_QUESTIONS_FAIL, state is undefined', undefined, { type: ActionTypes.FETCH_QUESTIONS_FAIL }],
    [6, '6. ActionType = FETCH_QUESTIONS_FAIL, state has some value', { someValue: 'some value' }, { type: ActionTypes.FETCH_QUESTIONS_FAIL }],
    [7, '7. ActionType = ANSWER_QUESTION, state is undefined', undefined, { type: ActionTypes.ANSWER_QUESTION, payload: { questionIndex: 0, answer: 'False' } }],
    [8, '8. ActionType = ANSWER_QUESTION, state has question', { questions: [{ }] }, { type: ActionTypes.ANSWER_QUESTION, payload: { questionIndex: 0, answer: 'False' } }],
    [9, '9. ActionType = RESET_QUESTIONS, state is undefined', undefined, { type: ActionTypes.RESET_QUESTIONS }],
    [10, '10. ActionType = RESET_QUESTIONS, state has some value', { someValue: 'some value' }, { type: ActionTypes.RESET_QUESTIONS }],
    [11, '11. default case, state is undefined', undefined, { type: 'some default type' }],
    [12, '12. default case, state has some value', { someValue: 'some value' }, { type: 'some default type' }],
  ].forEach((testcase) => {
    const [scenario, testname, state, action] = testcase;
    /* eslint-disable no-undef */
    test(testname, () => {
    /* eslint-enable no-undef */
    // Arrange

      // Act
      const result = reducer(state, action);

      // Assert
      switch (scenario) {
        case 1:
          expect(result).toEqual({ questions: [], loading: true });
          break;
        case 2:
          expect(result).toEqual({ someValue: 'some value', loading: true });
          break;
        case 3:
          expect(result).toEqual({ loading: false, questions: 'some results' });
          break;
        case 4:
          expect(result).toEqual({ loading: false, questions: 'some results', someValue: 'some value' });
          break;
        case 5:
          expect(result).toEqual({ error: 'Error while fetching questions', loading: false, questions: [] });
          break;
        case 6:
          expect(result).toEqual({ error: 'Error while fetching questions', loading: false, someValue: 'some value' });
          break;
        case 7:
          expect(result).toEqual({ questions: [], loading: false });
          break;
        case 8:
          expect(result).toEqual({ questions: [{ given_answer: 'False' }] });
          break;
        case 9:
        case 10:
        case 11:
          expect(result).toEqual({ questions: [], loading: false });
          break;
        case 12:
          expect(result).toEqual({ someValue: 'some value' });
          break;
        default:
          break;
      }
    });
  });
});
