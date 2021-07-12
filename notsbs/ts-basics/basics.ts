// Utility types
interface User {
    id: number;
    name: string;
    email?: string;
}

// Optional values
type userOptionals = Partial<User>;

export const updateUser = (u: User, update: userOptionals): User => {
    return { ...u, ...update };
};

// Required values
type userRequired = Required<User>;

// Email and name
type UserEmailName = Pick<User, 'email' | 'name'>;

export const mapById = (users: User[]): Record<string, User> => {
    return users.reduce((u, v) => {
        return {
            ...u,
            [v.id]: v,
        };
    }, {});
};

// Omitting an element
type UserWithoutID = Omit<User, 'id'>;

// To make returning type more variant and consistent to User's id type
export const removeId = (u: User[]): Record<User['id'], UserWithoutID> => {
    return u.reduce((k, v) => {
        const { id, ...rest } = v;
        return {
            ...k,
            [id]: rest,
        };
    }, {});
};
