import speak from '../src/js/modules/my-module';

describe('My Module', () => {
  let log = null;

  beforeEach(() => {
    log = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    log.mockRestore();
  });

  it('should export a function', () => {
    expect(speak).toBeInstanceOf(Function);
  });

  it('should call console.log', () => {
    const message = 'Hello!';
    speak(message);
    expect(log).toHaveBeenCalledTimes(1);
    expect(log).toHaveBeenCalledWith(`Module my-module says: \"${message}\"`);
  });
});
