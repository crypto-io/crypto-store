import Handler from './handler.js';
export const StoreHandler = Handler;
export class Store {
  constructor(namespace = 'default', enc = 'hex') {
    let store;

    if (typeof module !== 'undefined' && module.exports) {
      global.__store__ = {};
      store = global.__store__;
    } else {
      window.__store__ = {};
      store = window.__store__;
    }

    if (!store[namespace]) {
      store[namespace] = new StoreHandler(enc);
    }

    return store[namespace];
  };
}
