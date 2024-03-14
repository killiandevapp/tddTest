import { expect, test } from 'vitest'
import { add } from '../main'

test('Empty string return 0', () => {
    expect(add("")).toBe(0);
});
test('Empty string returns 1', () => {
    expect(add("1")).toBe(1);
});

test('two numbers', () => {
    expect(add("1,2")).toBe(3);
});

test('Multiple numbers string return their sum', () => {
    expect(add("1,2,3,4,5")).toBe(15);
});
test('newline as delimiter returns correct sum', () => {
    expect(add("1\n2,3")).toBe(4);
    expect(add("1,\n")).toBe(null);
});

test('Support different delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);

});
test('Negative number', () => {
    expect(add("-5")).toBe("Negatves not allowed for -5")
})



