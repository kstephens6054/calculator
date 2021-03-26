import InitialState from './states/InitialState';

export default class Calculator {
  constructor() {
    this._state = new InitialState(this);
    this._value = 0.0;
    this._buffer = '';
    this._stack = [];
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
  }

  get state() {
    return this._state;
  }

  set state(newState) {
    this._state = newState;
  }
}
