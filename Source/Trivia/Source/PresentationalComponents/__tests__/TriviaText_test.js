import renderer from 'react-test-renderer';
import React from 'react';
import ModuleUnderTest from '../TriviaText';

describe('renders correctly', () => {
  /* eslint-disable no-undef */
  test('normal', () => {
    /* eslint-enable no-undef */
    // Arrange/ Act
    const tree =
      renderer.create(<ModuleUnderTest>Some Text</ModuleUnderTest>).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
  });
});
