import * as ActionTypes from './ActionTypes';

export function resetQuestions(questionIndex, answer) {
  return {
    type: ActionTypes.RESET_QUESTIONS,
    payload: {},
  };
}
