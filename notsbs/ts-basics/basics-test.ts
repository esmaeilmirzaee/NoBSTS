import { add3DCoordinates, simpleState } from './basics';

console.log(add3DCoordinates([1, 2, 3], [10, 20, 30]));

let [init, setInit] = simpleState('Welcome');

console.log(init());
setInit('Goodbye');
console.log(init());
