import * as ActionTypes from './ActionTypes';
import * as APIUtils from '../Utils/APIUtils';

export function fetchQuestions() {
  return {
    type: ActionTypes.FETCH_QUESTIONS,
    payload: {
      request: {
        url: APIUtils.FETCH_QUESTIONS_URI,
      },
    },
  };
}
