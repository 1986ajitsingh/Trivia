import * as ActionTypes from './ActionTypes';

export default function answerQuestion(answer) {
  return {
    type: ActionTypes.ANSWER_QUESTION,
    payload: {
      answer,
    },
  };
}
