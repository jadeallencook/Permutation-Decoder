const decoder = string => {

    const sequence = string.split('').map(num => parseInt(num));
    const length = sequence.length;
    let result = (length) ? [1, 1, ...Array(length - 1).fill(0)] : null;

    if (!length || length === 1) return 1;
    else if (sequence[0] === 0) return 0;
    
    for (let index = 2; index <= length; index++) {
        const num = parseInt(`${sequence[index - 2]}${sequence[index - 1]}`);
        result[index] += (
            num >= 10 && 
            num <= 26 && 
            num % 10 !== 0
        ) ? result[index - 2] + result[index - 1] : result[index - 1];
    }

    return result[length];
}

module.exports = decoder;