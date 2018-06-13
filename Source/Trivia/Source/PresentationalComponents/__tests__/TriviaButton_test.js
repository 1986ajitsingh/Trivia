import renderer from 'react-test-renderer';
import React from 'react';
import ModuleUnderTest from '../TriviaButton';

describe('renders correctly', () => {
  /* eslint-disable no-undef */
  test('normal', () => {
    /* eslint-enable no-undef */
    // Arrange/ Act
    const mockFun = jest.fn();
    const tree =
      renderer.create(<ModuleUnderTest onPress={mockFun}>Some Text</ModuleUnderTest>).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
  });
});
