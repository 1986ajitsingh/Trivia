import renderer from 'react-test-renderer';
import React from 'react';
import ModuleUnderTest from '../Question';

describe('renders correctly', () => {
  /* eslint-disable no-undef */
  test('normal', () => {
    /* eslint-enable no-undef */
    // Arrange/ Act
    const mockFun = jest.fn();
    const tree = renderer.create(<ModuleUnderTest onQuestionAnswered={mockFun} />).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
  });
});

describe('constructor', () => {
  /* eslint-disable no-undef */
  test('normal', () => {
    /* eslint-enable no-undef */
    // Arrange
    const expectedState = {
      selectedSegment: 'none',
    };

    // Act
    const moduleUnderTest = new ModuleUnderTest({});

    // Assert
    expect(moduleUnderTest.state).toEqual(expectedState);
  });
});

describe('componentWillReceiveProps', () => {
  /* eslint-disable no-undef */
  test('normal', () => {
    /* eslint-enable no-undef */
    // Arrange
    const moduleUnderTest = new ModuleUnderTest({});
    moduleUnderTest.state = 'some state';

    // Act
    moduleUnderTest.componentWillReceiveProps();

    // Assert
    expect(moduleUnderTest.state).toEqual({ selectedSegment: 'none' });
  });
});

describe('optionSelected', () => {
  /* eslint-disable no-undef */
  test('normal', () => {
    /* eslint-enable no-undef */
    // Arrange
    const mockSetState = jest.fn();
    const mockSetTimeout = jest.fn();
    const mockClearTimeout = jest.fn();
    const mockOnQuestionAnswered = jest.fn();
    const moduleUnderTest = new ModuleUnderTest({});
    const selectedSegment = 'some selected segment';
    moduleUnderTest.props = { onQuestionAnswered: mockOnQuestionAnswered };
    moduleUnderTest.setState = jest.fn((state, callback) => {
      mockSetState(state, callback);
      if (callback) { callback(); }
    });
    const originalSetTimeout = setTimeout;
    /* eslint-disable no-global-assign */
    setTimeout = jest.fn((callback, milliseconds) => {
      mockSetTimeout(callback, milliseconds);
      if (callback) { callback(); }
    });
    const originalClearTimeout = clearTimeout;
    clearTimeout = mockClearTimeout;

    // Act
    moduleUnderTest.optionSelected(selectedSegment);
    clearTimeout = originalClearTimeout;
    setTimeout = originalSetTimeout;
    /* eslint-enable no-global-assign */

    // Assert
    expect(mockSetState).toBeCalledWith({ selectedSegment }, expect.anything());
    expect(mockSetTimeout).toBeCalledWith(expect.anything(), 100);
    expect(mockOnQuestionAnswered).toBeCalledWith(selectedSegment);
    expect(mockClearTimeout).toBeCalled();
  });
});
