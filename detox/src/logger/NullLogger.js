// @ts-ignore
const { red, yellow } = require('chalk');

// TODO: implement it correctly
class NullLogger {
  constructor(config) {
    this._config = config || {};
  }

  child(overrides) {
    return new NullLogger(
      { ...this._config, ...overrides },
    );
  }

  error(msg) {
    console.error(red(msg));
  }

  warn(msg) {
    console.error(yellow(msg));
  }

  info(msg) {
    console.log(msg);
  }

  debug(msg) {
    console.log(msg);
  }

  trace(msg) {
    console.log(msg);
  }

  get level() {
    return 'trace';
  }
}

module.exports = NullLogger;
