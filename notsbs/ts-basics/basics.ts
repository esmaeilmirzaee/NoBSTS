let hasLoggedIn: boolean = true;

let firstName: string = 'Esmaeil ';

let myNumber: number = 10;
let myRegEx: RegExp = /foo/;

interface Person {
    first: string;
    last: string;
    age: number;
    registered: boolean;
}

const esmaeil: Person = {
    first: 'Esmaeil',
    last: 'MIRZAEE',
    age: 35,
    registered: false,
};

const grades: Array<number> = [4, 3.8, 3.6, 4];
let average: number = grades.reduce((g, acc) => (acc += g));
console.log(average / grades.length);

let classType: Record<number, string> = {
    3.8: 'A',
    3.5: 'B',
};
