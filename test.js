const test = require('tape');
const {Store} = require('./store');
const {StoreHandler} = require('./store');

test('Store', tape => {
  tape.plan(2);
  const store = new Store();
  store.secret = 'secret';
  tape.equal(store.secret, 'secret');
  try {
    store.secret = 'should fail'
  } catch (error) {
    tape.equal(error.message,  'Cannot redefine property: _secret', error.message);
  }
});

test('new Store', tape => {
  tape.plan(2);
  const store = new Store('wallet');
  store.secret = 'secret';
  tape.equal(store.secret, 'secret');
  try {
    store.secret = 'should fail'
  } catch (error) {
    tape.equal(error.message,  'Cannot redefine property: _secret', error.message);
  }
});

test('new StoreHandler', tape => {
  tape.plan(1);
  const store = new StoreHandler('hex');
  tape.pass('StoreHandler created');
});
