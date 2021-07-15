// Read maps typed page on typescript handbook or website
import { Group, objectModifier, User } from './basics';

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

//
objectModifier(admin, {
    onNameChange: (name: string) => {},
    onNameDelete: () => {},
});
