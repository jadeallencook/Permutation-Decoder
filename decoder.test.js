const decoder = require('./decoder');

test('"" returns 1', () => {
    expect(decoder('')).toBe(1);
});

test('"1234" returns 3', () => {
    expect(decoder('1234')).toBe(3);
});

test('"0123" returns 0', () => {
    expect(decoder('0123')).toBe(0);
});

test('"1213" returns 5', () => {
    expect(decoder('1213')).toBe(5);
});

test('"2012" returns 2', () => {
    expect(decoder('2012')).toBe(2);
});

test('"1212121212" returns 89', () => {
    expect(decoder('1212121212')).toBe(89);
});