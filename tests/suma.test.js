import test from 'node:test';
import assert from 'node:assert/strict';

const suma = (a, b) => {
  return a + b;
};

test('suma 2 + 3 = 5', () => {
  assert.equal(suma(2, 3), 5);
});
