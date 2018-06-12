import mockStore from 'redux-mock-store';
import ModuleUnderTest from '../QuizScreen';

jest.mock('react-redux', () => ({
  connect: () => (type => (type)),
}));

const initialState = {};
const store = mockStore(initialState);

describe('constructor', () => {
  /* eslint-disable no-undef */
  test('normal', () => {
    /* eslint-enable no-undef */
    // Arrange

    // Act
    const moduleUnderTest = new ModuleUnderTest(
      { },
      { store },
    );

    // Assert
    expect(moduleUnderTest.state).toEqual({ question: {} });
  });
});

describe('componentWillMount', () => {
  /* eslint-disable no-undef */
  test('normal', () => {
    /* eslint-enable no-undef */
    // Arrange
    const mockSetState = jest.fn();
    const moduleUnderTest = new ModuleUnderTest(
      { },
      { store },
    );
    moduleUnderTest.setState = mockSetState;
    moduleUnderTest.props = {
      questions: [1, 2],
      questionIndex: 0,
    };

    // Act
    moduleUnderTest.componentWillMount();

    // Assert
    expect(mockSetState).toBeCalledWith({ question: 1 });
  });
});

describe('componentWillReceiveProps', () => {
  [
    [1, '1. hasMoreUnansweredQuestions === true', true],
    [2, '2. hasMoreUnansweredQuestions === false', false],
  ].forEach((testcase) => {
    const [scenario, testname, hasMoreUnansweredQuestions] = testcase;
    /* eslint-disable no-undef */
    test(testname, () => {
    /* eslint-enable no-undef */
    // Arrange
      const mockSetState = jest.fn();
      const mockNavigate = jest.fn();
      const moduleUnderTest = new ModuleUnderTest(
        { },
        { store },
      );
      const nextProps = {
        questions: [1, 2],
        questionIndex: 0,
        hasMoreUnansweredQuestions,
      };
      moduleUnderTest.setState = mockSetState;
      moduleUnderTest.props = {
        navigation: {
          navigate: mockNavigate,
        },
      };

      // Act
      moduleUnderTest.componentWillReceiveProps(nextProps);

      // Assert
      switch (scenario) {
        case 1:
          expect(mockSetState).toBeCalledWith({ question: 1 });
          expect(mockNavigate).not.toBeCalled();
          break;
        case 2:
          expect(mockNavigate).toBeCalledWith('Result');
          expect(mockSetState).not.toBeCalled();
          break;
        default:
          break;
      }
    });
  });
});

describe('handleOnQuestionAnswered', () => {
  /* eslint-disable no-undef */
  test('normal', () => {
    /* eslint-enable no-undef */
    // Arrange
    const mockAnswerQuestion = jest.fn();
    const moduleUnderTest = new ModuleUnderTest(
      { },
      { store },
    );
    const answer = 'some answer';
    moduleUnderTest.props = {
      answerQuestion: mockAnswerQuestion,
    };

    // Act
    moduleUnderTest.handleOnQuestionAnswered(answer);

    // Assert
    expect(mockAnswerQuestion).toBeCalledWith(answer);
  });
});
