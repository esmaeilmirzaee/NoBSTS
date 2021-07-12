import { mapById, removeId, updateUser } from './basics';

// Utility types
console.log(updateUser({ id: 1, name: 'Esmaeil' }, {}));
console.log(updateUser({ id: 2, name: 'Esmaeil', email: 'e@e.com' }, {}));
console.log(updateUser({ id: 1, name: 'Esmaeil' }, { email: 'e@example.com' }));

console.log(mapById([{ id: 1, name: 'Esmaeil' }]));
console.log(
    removeId([
        { id: 1, name: 'Esmaeil' },
        { id: 2, name: 'Sam' },
    ]),
);
