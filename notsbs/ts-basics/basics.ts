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

[12, 2, 3, 4, 56].forEach((v: number) => console.log(v));
const valuesNumber: number[] = [12, 2, 3, 4, 56].map((v: number) => v * 10);
const valuesString: string[] = [12, 2, 3, 4, 56].map(
    (v: number) => `&{v * 10}`,
);
