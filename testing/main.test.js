import { expect, test } from 'vitest'
import { add } from '../main'

test('Empty string returns 0', () => {
    expect(add("")).toBe(0);
});
test('Empty string returns 1', () => {
    expect(add("1")).toBe(1);
});

test('two numbers', () => {
    expect(add("1,2")).toBe(3);
});


