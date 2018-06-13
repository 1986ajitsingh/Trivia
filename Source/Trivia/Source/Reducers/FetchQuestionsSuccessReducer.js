const Entities = require('html-entities').AllHtmlEntities;

const entities = new Entities();

export default function fetchQuestionsSuccessReducer(state, action) {
  const fetchedQuestions = action.payload.data.results;
  const questions = [];
  fetchedQuestions.forEach((fetchQuestion) => {
    /* eslint-disable camelcase */
    const { category, correct_answer, question } = fetchQuestion;
    /* eslint-enable camelcase */
    questions.push({
      category,
      correct_answer,
      question: entities.decode(question),
    });
  });

  return {
    ...state,
    loading: false,
    questions,
  };
}

