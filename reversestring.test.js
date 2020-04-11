const reverseString = require('./reversestring');

test('reverseString function exits', () => {
    expect(reverseString).toBeDefined();
});

test('String reverse', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test('String reverses with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});