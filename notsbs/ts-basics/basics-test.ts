import { getEmail, getEmailCoercingWay, printIngredient, User } from './basics';

printIngredient('1C', 'Flour');
printIngredient('1C', 'Flour', 'Water');

let u: User = {
    name: 'Esmaeil',
    info: {
        email: 'e@e.com',
    },
};

console.log(getEmail(u));
console.log(getEmailCoercingWay(u));
