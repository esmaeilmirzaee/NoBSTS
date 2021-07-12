import { pluck, SendEvent } from './basics';

const people = [
    { name: 'Esmaeil', age: 37 },
    { name: 'Sam', age: 39 },
];

console.log(pluck(people, 'age'));
console.log(pluck(people, 'name'));

SendEvent('addToCart', {
    productId: 10,
    quantity: 1,
    user: 'johndoe',
    time: new Date().toLocaleDateString(),
});

SendEvent('checkout', {
    user: 'JaneDoe',
    time: new Date().toLocaleDateString(),
});
