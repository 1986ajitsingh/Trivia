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

describe('componentWillReceiveProps', () => {
  [
    [1, '1. nextProps has valid questions', { questions: [1, 2] }],
    [2, '2. nextProps does not has valid questions', {}],
  ].forEach((testcase) => {
    const [scenario, testname, nextProps] = testcase;
    /* eslint-disable no-undef */
    test(testname, () => {
    /* eslint-enable no-undef */
    // Arrange
      const mockSetState = jest.fn();
      const mockGetParamInternal = jest.fn();
      const moduleUnderTest = new ModuleUnderTest(
        { },
        { store },
      );
      moduleUnderTest.setState = mockSetState;
      const testQuestionIndex = 1;
      const mockGetParam = jest.fn((param) => {
        mockGetParamInternal(param);
        return testQuestionIndex;
      });
      moduleUnderTest.props = {
        navigation: {
          getParam: mockGetParam,
        },
      };

      // Act
      moduleUnderTest.componentWillReceiveProps(nextProps);

      // Assert
      expect(mockGetParamInternal).toBeCalledWith('questionIndex');
      switch (scenario) {
        case 1:
          expect(mockSetState).toBeCalledWith({ question: 2 });
          break;
        case 2:
          expect(mockSetState).toBeCalledWith({ question: undefined });
          break;
        default:
          break;
      }
    });
  });
});

describe('handleOnQuestionAnswered', () => {
  [
    [1, '1. questionIndex < (this.props.questions.length - 1)', 1],
    [2, '2. questionIndex > (this.props.questions.length - 1)', 10],
  ].forEach((testcase) => {
    const [scenario, testname, testQuestionIndex] = testcase;
    /* eslint-disable no-undef */
    test(testname, () => {
    /* eslint-enable no-undef */
    // Arrange
      const mockGetParamInternal = jest.fn();
      const mockAnswerQuestion = jest.fn();
      const mockNavigate = jest.fn();
      const moduleUnderTest = new ModuleUnderTest(
        { },
        { store },
      );
      const mockGetParam = jest.fn((param) => {
        mockGetParamInternal(param);
        return testQuestionIndex;
      });
      const answer = 'some answer';
      moduleUnderTest.props = {
        navigation: {
          getParam: mockGetParam,
          navigate: mockNavigate,
        },
        answerQuestion: mockAnswerQuestion,
        questions: [1, 2, 3],
      };

      // Act
      moduleUnderTest.handleOnQuestionAnswered(answer);

      // Assert
      expect(mockGetParamInternal).toBeCalledWith('questionIndex');
      expect(mockAnswerQuestion).toBeCalledWith(testQuestionIndex, answer);
      switch (scenario) {
        case 1:
          expect(mockNavigate).toBeCalledWith('Quiz', { questionIndex: 2 });
          break;
        case 2:
          expect(mockNavigate).toBeCalledWith('Result');
          break;
        default:
          break;
      }
    });
  });
});
