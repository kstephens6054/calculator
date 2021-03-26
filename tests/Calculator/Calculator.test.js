import Calculator from '../../src/js/modules/Calculator/Calculator';

describe('Calculator class', () => {
  describe('Calculator constructor', () => {
    it('creates a new Calculator instance', () => {
      expect(new Calculator()).toBeInstanceOf(Calculator);
    });
  });
});
