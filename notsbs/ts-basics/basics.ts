const addNumbers = (a: number, b: number) => {
    return a + b;
};
export default addNumbers;

export const salutation = (message: string, names: string[]): string =>
    `${message} ${names.join(' ')}`;

export const format = (strOne: string, strTwo: string): string =>
    `${strOne} ${strTwo}`;

export const printFormat = (strOne: string, strTwo: string = ''): void => {
    console.log(format(strOne, strTwo));
};

export const fetchData = (url: string): Promise<string> => {
    return Promise.resolve(`Data from ${url}.`);
};
