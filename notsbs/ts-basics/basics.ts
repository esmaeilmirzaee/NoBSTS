export const printToFile = (text: string, callback: () => void) => {
    console.log(text);
    callback();
};

export const arrayMutate = (
    numbers: number[],
    mutate: mutationFunction,
): number[] => {
    return numbers.map(mutate);
};

export type mutationFunction = (v: number) => number;

export const adder =
    (numOne: number): ((v: number) => number) =>
    (val: number) =>
        numOne + val;
