const decoder = string => {
    let previous = result = 1;
    if (string.startsWith('0')) return 0;
    string.split('').map((value, index) => {
        if (index) {
            const num = parseInt(`${string[index - 1]}${value}`);
            const canPermutate = (num >= 10 && num <= 26 && num % 10 !== 0);
            result = (canPermutate) ? result + previous : result;
            previous = (canPermutate) ? result - previous : result;
        }
    });
    return result;
}

module.exports = decoder;