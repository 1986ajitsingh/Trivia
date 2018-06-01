import * as ActionTypes from './ActionTypes';
import * as APIUtils from '../APIUtils';

export function fetchQuestions(user) {
    return {
      type: ActionTypes.FETCH_QUESTIONS,
      payload: {
        request: {
          url: APIUtils.FETCH_QUESTIONS_URI
        }
      }
    };
  }