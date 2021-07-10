import addNumbers, { fetchData, printFormat, salutation } from './basics';

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

console.log(salutation('Hi', ['Esmaeil', 'Sam']));

printFormat('Next');

console.log(fetchData('https://google.com'));
