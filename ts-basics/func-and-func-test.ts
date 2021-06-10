import {
    adder,
    mutation,
    MutationFunctionType,
    printToFile,
} from './func-and-func';
printToFile('something', () => {
    console.log('something');
});

const myCallback: MutationFunctionType = (v) => v * 10;

console.log(mutation([1, 2, 3], myCallback));
let getAdder = adder(2);
console.log(getAdder(3));
