import { User, UserList } from './basics';

// Readonly in class
let admin: User = new User(1, 'admin', 1000);
console.log(admin);
admin.groupId = 2;

// Cannot assign to 'name' because it is a read-only property.
// admin.id = 2;

// Cannot assign to 'name' because it is a read-only property.
// admin.name = 'not admin';

// Property 'isAdmin' is protected and only accessible within class 'User' and its subclasses.
// admin.isAdmin = false;

let users: UserList = UserList.instance;
users.addUser(admin);
users.addUser(admin);
users.addUser(admin);
console.log(users.getUsers());
