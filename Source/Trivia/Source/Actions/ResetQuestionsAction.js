import * as ActionTypes from './ActionTypes';

export default function resetQuestions() {
  return {
    type: ActionTypes.RESET_QUESTIONS,
    payload: {},
  };
}
