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

test('Multiple numbers string returns their sum', () => {
    expect(add("1,2,3,4,5")).toBe(15);
});
test('Newline as delimiter returns correct sum', () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("1,\n")).toBe(null);
});

test('Support different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);

});



