import mockStore from 'redux-mock-store';
import ModuleUnderTest from '../ResultsScreen';

jest.mock('react-redux', () => ({
  connect: () => (type => (type)),
}));

const initialState = {};
const store = mockStore(initialState);

describe('componentWillReceiveProps', () => {
  [
    [1, '1. questions.length === 0', { questions: [] }],
    [2, '2. questions.length !== 0', { questions: [1, 2] }],
  ].forEach((testcase) => {
    const [scenario, testname, nextProps] = testcase;
    /* eslint-disable no-undef */
    test(testname, () => {
    /* eslint-enable no-undef */
    // Arrange
      const mockNavigate = jest.fn();
      const moduleUnderTest = new ModuleUnderTest(
        { },
        { store },
      );
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
          expect(mockNavigate).toBeCalledWith('Home');
          break;
        case 2:
          expect(mockNavigate).not.toBeCalled();
          break;
        default:
          break;
      }
    });
  });
});

describe('onPressPlayAgain', () => {
  /* eslint-disable no-undef */
  test('normal', () => {
    /* eslint-enable no-undef */
    // Arrange
    const mockResetQuestions = jest.fn();
    const moduleUnderTest = new ModuleUnderTest(
      { },
      { store },
    );
    moduleUnderTest.props = {
      resetQuestions: mockResetQuestions,
    };

    // Act
    moduleUnderTest.onPressPlayAgain();

    // Assert
    expect(mockResetQuestions).toBeCalled();
  });
});

describe('getTotalCorrectAnswers', () => {
  [
    [1, '1. questions.length === 0', [], 0],
    [2, '2. questions.length > 0, no correct questions', [{ correct_answer: 'True', given_answer: 'False' }, { correct_answer: 'False', given_answer: 'True' }, { correct_answer: 'True', given_answer: 'False' }], 0],
    [3, '3. questions.length > 0, some correct questions', [{ correct_answer: 'True', given_answer: 'False' }, { correct_answer: 'False', given_answer: 'False' }, { correct_answer: 'True', given_answer: 'True' }], 2],
  ].forEach((testcase) => {
    const [, testname, testQuestions, correctQuestions] = testcase;
    /* eslint-disable no-undef */
    test(testname, () => {
    /* eslint-enable no-undef */
    // Arrange
      const moduleUnderTest = new ModuleUnderTest(
        { },
        { store },
      );
      moduleUnderTest.props = {
        questions: testQuestions,
      };

      // Act
      const result = moduleUnderTest.getTotalCorrectAnswers();

      // Assert
      expect(result).toEqual(correctQuestions);
    });
  });
});
