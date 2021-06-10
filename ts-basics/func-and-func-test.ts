import { mutation, printToFile } from './func-and-func';
printToFile('something', () => {
    console.log('something');
});

console.log(mutation([1, 2, 3], (v) => v * 10));
