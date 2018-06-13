import renderer from 'react-test-renderer';
import React from 'react';
import ModuleUnderTest from '../Loader';

describe('renders correctly', () => {
  /* eslint-disable no-undef */
  test('normal', () => {
    /* eslint-enable no-undef */
    // Arrange/ Act
    const tree = renderer.create(<ModuleUnderTest loading />).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
  });
});
