import mockStore from 'redux-mock-store';
import { Alert } from 'react-native';
import ModuleUnderTest from '../HomeScreen';

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
    expect(moduleUnderTest.state).toEqual({ showLoading: false });
  });
});

describe('componentWillReceiveProps', () => {
  /* eslint-disable no-undef */
  test('normal', () => {
    /* eslint-enable no-undef */
    // Arrange
    const mockSetState = jest.fn();
    const mockHandleNewProps = jest.fn();
    const moduleUnderTest = new ModuleUnderTest(
      { },
      { store },
    );
    const nextProps = {
      loading: true,
    };
    moduleUnderTest.setState = jest.fn((state, callback) => {
      mockSetState(state, callback);
      if (callback) { callback(); }
    });
    moduleUnderTest.handleNewProps = mockHandleNewProps;

    // Act
    moduleUnderTest.componentWillReceiveProps(nextProps);

    // Assert
    expect(mockSetState).toBeCalledWith({ showLoading: nextProps.loading }, expect.anything());
    expect(mockHandleNewProps).toBeCalledWith(nextProps);
  });
});

describe('onPressBegin', () => {
  /* eslint-disable no-undef */
  test('normal', () => {
    /* eslint-enable no-undef */
    // Arrange
    const mockFetchQuestions = jest.fn();
    const moduleUnderTest = new ModuleUnderTest(
      { },
      { store },
    );
    moduleUnderTest.props = { fetchQuestions: mockFetchQuestions };

    // Act
    moduleUnderTest.onPressBegin();

    // Assert
    expect(mockFetchQuestions).toBeCalled();
  });
});

describe('handleNewProps', () => {
  [
    [1, '1. nextProps.loading === false, nextProps.error !== undefined', { loading: false, error: 'Some error' }],
    [2, '2. nextProps.loading === true, nextProps.error !== undefined, nextProps.questions.length > 0', { loading: true, error: 'Some error', questions: [1] }],
    [3, '3. nextProps.loading === false, nextProps.error === undefined, nextProps.questions.length === 0', { loading: false, error: undefined, questions: [] }],
  ].forEach((testcase) => {
    const [scenario, testname, nextProps] = testcase;
    /* eslint-disable no-undef */
    test(testname, () => {
    /* eslint-enable no-undef */
      // Arrange
      const mockNavigate = jest.fn();
      const mockSetTimeout = jest.fn();
      const mockClearTimeout = jest.fn();
      const mockAlert = jest.fn();
      const moduleUnderTest = new ModuleUnderTest(
        { },
        { store },
      );
      moduleUnderTest.props = {
        navigation: {
          navigate: mockNavigate,
        },
      };
      const originalSetTimeout = setTimeout;
      /* eslint-disable no-global-assign */
      setTimeout = jest.fn((callback, milliseconds) => {
        mockSetTimeout(callback, milliseconds);
        if (callback) { callback(); }
      });
      const originalAlert = Alert.alert;
      Alert.alert = mockAlert;
      const originalClearTimeout = clearTimeout;
      clearTimeout = mockClearTimeout;

      // Act
      moduleUnderTest.handleNewProps(nextProps);
      clearTimeout = originalClearTimeout;
      setTimeout = originalSetTimeout;
      Alert.alert = originalAlert;
      /* eslint-enable no-global-assign */

      // Assert
      switch (scenario) {
        case 1:
          expect(mockSetTimeout).toBeCalledWith(expect.anything(), 200);
          expect(mockAlert).toBeCalledWith('Error loading questions. Please try again later.');
          expect(mockClearTimeout).toBeCalled();
          break;
        case 2:
          expect(mockNavigate).toBeCalledWith('Quiz');
          break;
        case 3:
          expect(mockSetTimeout).not.toBeCalled();
          expect(mockClearTimeout).not.toBeCalled();
          expect(mockNavigate).not.toBeCalled();
          expect(mockAlert).not.toBeCalled();
          break;
        default:
          break;
      }
    });
  });
});
