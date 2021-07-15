import { Group, User } from './basics';

// Mapped Type
const admin: User = {
    name: 'Admin',
    password: '123456',
    isAdmin: true,
    id: 0,
};

const root: Group = {
    name: 'root',
    id: 0,
    isRoot: true,
};

console.log(admin, root);
