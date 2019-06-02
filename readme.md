# String Permutation Decoder

Returns amount of permutations from numbers to letters.

```
1: A
2: B
3: C
...
26: Z
```

## Example
The sequence '1234' has 3 possible permutations: 

```js
[1, 2, 3, 4]
[12, 3, 4]
[1, 23, 4]
```

Decoder figures this out by first creating an array:

```js
// [1, 1, ...sequence.length - 1]
[1, 1, 0, 0, 0]
```

Then looping over the sequence looking for permutations:

```js
// (12)34 is a permutation (1 + 1)
[1, 1, 0, 0, 0] -> [1, 1, 2, 0, 0]
// 1(23)4 is a permutation (1 + 2)
[1, 1, 2, 0, 0] -> [1, 1, 2, 3, 0]
// 12(34) is not a permutation
[1, 1, 2, 3, 0] -> [1, 1, 2, 3, 3]
```

Decoder then returns the last number in the array.

## Use

```js
import decoder from './decoder';
decoder('1234'); // returns 3
```

## Example 2

The sequence '1213' has 5 possible permutations: 

```js
// (12)13 is a permutation (1 + 1)
[1, 1, 0, 0, 0] -> [1, 1, 2, 0, 0]
// 1(21)3 is a permutation (2 + 1)
[1, 1, 2, 0, 0] -> [1, 1, 2, 3, 0]
// 12(13) is a permutation (3 + 2)
[1, 1, 2, 3, 0] -> [1, 1, 2, 3, 5]
```