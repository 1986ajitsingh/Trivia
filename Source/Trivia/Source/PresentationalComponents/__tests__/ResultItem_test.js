import ModuleUnderTest from '../ResultItem';

describe('getAnswerText', () => {
  [
    [1, '1. question is undefined', undefined],
    [2, '2. question has correct_answer === given_answer', { correct_answer: 'True', given_answer: 'True' }],
    [3, '3. question has correct_answer !== given_answer', { correct_answer: 'True', given_answer: 'False' }],
  ].forEach((testcase) => {
    const [scenario, testname, question] = testcase;
    /* eslint-disable no-undef */
    test(testname, () => {
    /* eslint-enable no-undef */
      // Arrange
      const moduleUnderTest = new ModuleUnderTest({
        question,
      });

      // Act
      const result = moduleUnderTest.getAnswerText();

      // Assert
      switch (scenario) {
        case 1:
        case 2:
          expect(result).toEqual('+');
          break;
        case 3:
          expect(result).toEqual('-');
          break;
        default:
          break;
      }
    });
  });
});
