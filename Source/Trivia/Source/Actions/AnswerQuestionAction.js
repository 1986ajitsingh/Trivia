import * as ActionTypes from './ActionTypes';

export default function answerQuestion(questionIndex, answer) {
  return {
    type: ActionTypes.ANSWER_QUESTION,
    payload: {
      questionIndex,
      answer,
    },
  };
}
