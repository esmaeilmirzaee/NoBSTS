export const addNumbers = (a: number, b: number): number => {
    return a + b;
};

export const joinNames = (a: string, b: string) => `${a} ${b}`;

export const fetchData = (url: string): Promise<string> =>
    Promise.resolve(`${url}`);

interface user {
    first: string;
    last: string;
}

export const getName = (user: user) =>
    `${user?.first ?? 'first name'} ${user?.last ?? 'last name'}`;
