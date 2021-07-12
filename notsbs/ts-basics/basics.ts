// Utility types
interface User {
    id: number;
    name: string;
    email?: string;
}

type userOptionals = Partial<User>;

export const updateUser = (u: User, update: userOptionals): User => {
    return { ...u, ...update };
};
