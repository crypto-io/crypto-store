export default class StoreHandler {
  /**
   * @param {string} enc set wanted encoding
   */
  constructor(enc = 'hex') {
    this.enc = enc;
  }

  set secret(value) {
    if (value) {
      this._defineStrictProperty('_secret', value);
    }
  }

  get secret() {
    return this._secret.toString(this.enc);
  }

  set public(value) {
    this._defineStrictProperty('public', value);
  }

  get public() {
    return encode(this._public);
  }

  _defineStrictProperty(property, value) {
    if (value && property) {
      return Object.defineProperty(this, property, {
        configurable: false,
        writable: false,
        value: value
      });
    }
    console.warn(`${property ? 'value' : 'property'} undefined`);
  }
}
