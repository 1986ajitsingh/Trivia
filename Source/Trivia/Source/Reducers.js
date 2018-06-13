import * as ActionTypes from './Actions/ActionTypes';
import * as APIUtils from './Utils/APIUtils';
import answerQuestionReducer from './Reducers/AnswerQuestionReducer';
import calculateTotalCorrectAnswersReducer from './Reducers/CalculateTotalCorrectAnswersReducer';
import fetchQuestionsSuccessReducer from './Reducers/FetchQuestionsSuccessReducer';

const initialState = {
  questions: [],
  loading: false,
  hasMoreUnansweredQuestions: true,
  questionIndex: 0,
  totalCorrectAnswers: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_QUESTIONS:
      return { ...state, loading: true };
    case ActionTypes.FETCH_QUESTIONS_SUCCESS:
      return fetchQuestionsSuccessReducer(state, action);
    case ActionTypes.FETCH_QUESTIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: APIUtils.FETCH_QUESTIONS_ERROR,
      };
    case ActionTypes.ANSWER_QUESTION:
      return answerQuestionReducer(state, action);
    case ActionTypes.RESET_QUESTIONS:
      return initialState;
    case ActionTypes.CALCULATE_TOTAL_CORRECT_ANSWERS:
      return calculateTotalCorrectAnswersReducer(state);
    default:
      return state;
  }
}

