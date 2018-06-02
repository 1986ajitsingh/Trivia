import * as ActionTypes from './ActionTypes';

export function answerQuestion(questionIndex, answer) {
  return {
    type: ActionTypes.ANSWER_QUESTION,
    payload: {
      questionIndex,
      answer,
    },
  };
}
