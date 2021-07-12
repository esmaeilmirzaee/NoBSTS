import { pluck } from './basics';

const people = [
    { name: 'Esmaeil', age: 37 },
    { name: 'Sam', age: 39 },
];

console.log(pluck(people, 'age'));
console.log(pluck(people, 'name'));
