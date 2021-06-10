export const printToFile = (text: string, callback: () => void): void => {
    console.log(text);
    callback();
};

export const mutation = (
    numbers: number[],
    callback: (v: number) => number,
): number[] => {
    return numbers.map((num) => callback(num));
};
