import Calculator from '../../src/js/modules/Calculator';

describe('Calculator module', () => {
  it('exports the Calculator class', () => {
    expect(Calculator).toBeInstanceOf(Function);
  });
});
