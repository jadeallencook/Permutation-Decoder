const sum = (l1, l2) => {
    const flatten = list => parseInt([list.val].reduce((temp) => {
        return temp.concat(list.next ? flatten(list.next) : '')
    }, [list.val]).reverse().join(''));
    const sum = (flatten(l1) + flatten(l2)).toString().split('').map(num => parseInt(num));
    const length = sum.length - 1;
    let obj = {
        val: null
    };
    console.log(sum);
}

sum({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4
        }
    }
}, {
    val: 3,
    next: {
        val: 4,
        next: {
            val: 2
        }
    }
})