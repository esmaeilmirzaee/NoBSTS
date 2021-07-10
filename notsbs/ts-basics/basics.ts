let hasLoggedIn: boolean = true;
let myName: string = 'Esmaeil';
let myNumber: number = 13;
let myRegExp: RegExp = /goo/;

interface User {
    first_name: string;
    last_name: string;
}

function logUser(u: User): string {
    return `${u.first_name} ${u.last_name}`;
}

const ids: Record<number, string> = {
    10: 'ten',
    20: 'twenty',
};

if (ids[30] === 'thirty') {
    console.log("It's thirty");
} else if (ids[10] === 'ten') {
    console.log("It's ten.");
} else if (ids[20] === 'twenty') {
    console.log("It's twenty");
}
