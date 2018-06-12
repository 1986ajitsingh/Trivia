import * as ActionTypes from './ActionTypes';

export default function calculateTotalCorrectAnswers() {
  return {
    type: ActionTypes.CALCULATE_TOTAL_CORRECT_ANSWERS,
    payload: {},
  };
}
