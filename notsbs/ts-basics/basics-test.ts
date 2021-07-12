import { makeCoordinate, showUser, User } from './basics';

// Constant types
let user: User = { id: 1, name: 'Esmaeil' };
showUser(user);

// Cannot assign to 'id' because it is a read-only property
// user.id = 2;
// showUser(user);

let coor = makeCoordinate(1, 2, 3);
console.log(coor);

// Cannot assign to '0' because it is a read-only property.
// coor[0] = 10;

// Cannot assign to '0' because it is a read-only property.
const reallyConst = [1, 2, 3] as const;
// reallyConst[0] = 10;
