interface User {
    first: string;
    last: string;
}
export const getName = (user: User) =>
    `${user?.first ?? 'first name'} ${user?.last ?? 'last name'}`;
