// classes

import { InMemoryDatabase, PersistentDatabase } from './basics';

let myDb = new InMemoryDatabase<number, string>();
myDb.set(1, 'one');
console.log(myDb.get(1));
// The following line happens because our db is not protected or private.
// myDb.db['1'] = 'two';
console.log(myDb.get(1));

let myDB = new PersistentDatabase<number, string>();
myDB.set(2, 'two');
let savedData = myDB.storeDatabase();
console.log(myDB.storeDatabase());
myDB.restoreDatabase(savedData);
console.log(myDB.get(2));
