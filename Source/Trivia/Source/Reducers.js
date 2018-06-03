import * as ActionTypes from './Actions/ActionTypes';
import * as APIUtils from './Utils/APIUtils';

const initialState = {
  questions: [],
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_QUESTIONS:
      return { ...state, loading: true };
    case ActionTypes.FETCH_QUESTIONS_SUCCESS:
      return { ...state, loading: false, questions: action.payload.data.results };
    case ActionTypes.FETCH_QUESTIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: APIUtils.FETCH_QUESTIONS_ERROR,
      };
    case ActionTypes.ANSWER_QUESTION:
      return {
        ...state,
        questions: answerQuestion(
          state.questions,
          action.payload.questionIndex,
          action.payload.answer,
        ),
      };
    case ActionTypes.RESET_QUESTIONS:
      return initialState;
    default:
      return state;
  }
}

function answerQuestion(questions, questionIndex, answer) {
  const question = (questions || [])[questionIndex];
  (question || {}).given_answer = (answer || '');
  return questions;
}
