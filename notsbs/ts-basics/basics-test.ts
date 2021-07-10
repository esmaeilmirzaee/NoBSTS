import addNumbers, {
    fetchData,
    getName,
    introduce,
    printFormat,
    salutation,
} from './basics';

console.log(addNumbers(1, 2));

interface salute {
    message: string;
    names: string[];
}

const saluteEsmaeil: salute = {
    message: 'Hi',
    names: ['Esmaeil', 'Sam'],
};

console.log(saluteEsmaeil);

console.log(salutation('Hi', 'Esmaeil', 'Sam'));
console.log(introduce('Hi', ['Esmaeil', 'Sam']));

printFormat('Next');

console.log(fetchData('https://google.com'));
console.log(getName({ first_name: 'Esmaeil', last_name: 'MIRZAEE' }));
console.log(getName({ first_name: '', last_name: '' }));
