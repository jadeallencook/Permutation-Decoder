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

test('"100" returns 0', () => {
    expect(decoder('100')).toBe(0);
});

test('"110" returns 1', () => {
    expect(decoder('110')).toBe(1);
});

test('"230" returns 0', () => {
    expect(decoder('230')).toBe(0);
});

test('"301" returns 0', () => {
    expect(decoder('301')).toBe(0);
});