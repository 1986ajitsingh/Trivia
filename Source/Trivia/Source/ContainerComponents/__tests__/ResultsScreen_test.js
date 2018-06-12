import mockStore from 'redux-mock-store';
import ModuleUnderTest from '../ResultsScreen';

jest.mock('react-redux', () => ({
  connect: () => (type => (type)),
}));

const initialState = {};
const store = mockStore(initialState);

describe('componentWillMount', () => {
  /* eslint-disable no-undef */
  test('normal', () => {
    /* eslint-enable no-undef */
    // Arrange
    const mockCalculateTotalCorrectAnswers = jest.fn();
    const moduleUnderTest = new ModuleUnderTest(
      { },
      { store },
    );
    moduleUnderTest.props = {
      calculateTotalCorrectAnswers: mockCalculateTotalCorrectAnswers,
    };

    // Act
    moduleUnderTest.componentWillMount();

    // Assert
    expect(mockCalculateTotalCorrectAnswers).toBeCalled();
  });
});

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
