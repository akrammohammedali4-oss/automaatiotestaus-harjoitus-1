import { test } from "node:test";
import assert from "node:assert";

import { add, subtract, multiply, divide, isEven } from "./calculator.js";

test("add laskee kaksi lukua yhteen", () => {
  const result = add(2, 3);

  assert.strictEqual(result, 5);
});

test("subtract vähentää kaksi lukua", () => {
  const result = subtract(10, 4);

  assert.strictEqual(result, 6);
});

test("multiply kertoo kaksi lukua", () => {
  const result = multiply(5, 4);

  assert.strictEqual(result, 20);
});

test("divide jakaa kaksi lukua", () => {
  const result = divide(10, 2);

  assert.strictEqual(result, 5);
});

test("isEven palauttaa true parilliselle luvulle", () => {
  assert.strictEqual(isEven(8), true);
});

test("isEven palauttaa false parittomalle luvulle", () => {
  assert.strictEqual(isEven(7), false);
});

test("divide heittää virheen nollalla jaettaessa", () => {
  assert.throws(() => divide(10, 0));
});
