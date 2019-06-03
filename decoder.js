const decoder = string => {
    let previous = (string.endsWith('0')) ? 0 : 1, result = 1;
    if (string.startsWith('0') || string.indexOf('00') !== -1) return 0;
    for (const [index, value] of string.split('').entries()) {
        if (index) {
            const num = parseInt(`${string[index - 1]}${value}`);
            const canPermutate = (num >= 10 && num <= 26 && num % 10 !== 0);
            if (num % 10 === 0 && num > 26) return 0;
            result = (canPermutate) ? result + previous : result;
            previous = (canPermutate) ? result - previous : result;
        }
    }
    return result;
}

module.exports = decoder;