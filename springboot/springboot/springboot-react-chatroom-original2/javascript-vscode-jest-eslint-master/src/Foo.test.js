import test from './test'

const Foo = require('./Foo');

describe('Function tests', () => {
  it('Returns Foo', () => {
    expect(Foo.getFoo()).toMatch(/Foo/);
  });
});

describe('Person class tests', () => {
  it('Full name returns correct value', () => {
    const p = new Foo.Person('John', 'Smith');
    expect(p.fullName()).toEqual('John Smith');
  });
});

describe('Demo:  Fail before method written', () => {
  it('Demo: fail before function written', () => {
    expect(doubleNum(3)).toEqual(6);
  });
  it('Failure Class method not written', () => {
    const p = new Foo.Person('John', 'Smith');
    expect(p.sayHello()).toEqual('Ji John');
  });
});

describe('Socket tests', () => {
  it('Can create a socket', () => {
    test.initializeWebSocketConnection();
  });
});
