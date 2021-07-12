import {
    addWithCallback,
    getEmail,
    getEmailCoalescingWay,
    printIngredient,
    User,
} from './basics';

printIngredient('1C', 'Flour');
printIngredient('1C', 'Flour', 'Water');

let u: User = {
    name: 'Esmaeil',
    info: {
        email: 'e@e.com',
    },
};

console.log(getEmail(u));
console.log(getEmailCoalescingWay(u));
addWithCallback(1, 2);
let a = 2;
let b = 1;

addWithCallback(a, b, () => {
    return a + b;
});
