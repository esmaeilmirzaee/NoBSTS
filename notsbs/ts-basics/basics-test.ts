import { adder, arrayMutate, printToFile } from './basics';

printToFile('Hi', () => {
    console.log('Goodbye');
});

console.log(arrayMutate([1, 2, 3], (v) => v * 10));
let add = adder(2);
console.log(add(3));
