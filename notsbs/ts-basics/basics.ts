const addNumbers = (a: number, b: number) => {
    return a + b;
};
export default addNumbers;

export const salutation = (message: string, ...names: string[]): string =>
    `${message} ${names.join(' ')}`;

export const introduce = (salutation: string, names: string[]): string =>
    `${salutation} ${names.join(' ')}`;

export const format = (strOne: string, strTwo: string): string =>
    `${strOne} ${strTwo}`;

export const printFormat = (strOne: string, strTwo: string = ''): void => {
    console.log(format(strOne, strTwo));
};

export const fetchData = (url: string): Promise<string> => {
    return Promise.resolve(`Data from ${url}.`);
};

// Misconception #1
export const getName = (user: {
    first_name: string;
    last_name: string;
}): string => `${user?.first_name ?? 'first'} ${user?.last_name ?? 'last'}`;
