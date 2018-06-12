import * as ActionTypes from './Actions/ActionTypes';
import * as APIUtils from './Utils/APIUtils';

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
      return { ...state, loading: false, questions: action.payload.data.results };
    case ActionTypes.FETCH_QUESTIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: APIUtils.FETCH_QUESTIONS_ERROR,
      };
    case ActionTypes.ANSWER_QUESTION:
      return answerQuestionReducer(
        state,
        state.questions,
        state.questionIndex,
        action.payload.answer,
      );
    case ActionTypes.RESET_QUESTIONS:
      return initialState;
    case ActionTypes.CALCULATE_TOTAL_CORRECT_ANSWERS:
      return { ...state, totalCorrectAnswers: calculateTotalCorrectAnswersAction(state.questions) };
    default:
      return state;
  }
}

function answerQuestion(questions, questionIndex, answer) {
  const question = (questions || [])[questionIndex];
  (question || {}).given_answer = (answer || '');
  return questions;
}

function answerQuestionReducer(state, questions, questionIndex, answer) {
  let hasMoreUnansweredQuestions = true;
  let nextQuestionIndex = 0;
  if (questionIndex < (questions.length - 1)) {
    nextQuestionIndex = questionIndex + 1;
  } else {
    hasMoreUnansweredQuestions = false;
  }

  return {
    ...state,
    questions: answerQuestion(
      questions,
      questionIndex,
      answer,
    ),
    hasMoreUnansweredQuestions,
    questionIndex: nextQuestionIndex,
  };
}

function calculateTotalCorrectAnswersAction(questions) {
  let totalCorrectAnswers = 0;
  (questions || []).forEach((question) => {
    if (question.correct_answer === question.given_answer) {
      totalCorrectAnswers += 1;
    }
  });
  return totalCorrectAnswers;
}
