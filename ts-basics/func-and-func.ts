export const printToFile = (text: string, callback: () => void): void => {
    console.log(text);
    callback();
};

export type MutationFunctionType = (v: number) => number;

export const mutation = (
    numbers: number[],
    callback: MutationFunctionType,
): number[] => {
    return numbers.map((num) => callback(num));
};

export type AdderFunctionType = (num: number) => number;

export const adder = (num: number): AdderFunctionType => {
    return (plusWhat: number) => num + plusWhat;
};
