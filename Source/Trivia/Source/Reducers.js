import * as ActionTypes from './Actions/ActionTypes';

export default function reducer(state = { questions: [] }, action) {
    switch (action.type) {
      case ActionTypes.FETCH_QUESTIONS:
        return { ...state, loading: true };
      case ActionTypes.FETCH_QUESTIONS_SUCCESS:
        return { ...state, loading: false, questions: action.payload.data.results };
      case ActionTypes.FETCH_QUESTIONS_FAIL:
        return {
          ...state,
          loading: false,
          error: 'Error while fetching questions'
        };
      default:
        return state;
    }
  }
