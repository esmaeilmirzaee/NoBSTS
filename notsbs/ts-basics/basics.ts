type ThreeDCoordinate = [x: number, y: number, z: number];

export const add3DCoordinates = (
    c1: ThreeDCoordinate,
    c2: ThreeDCoordinate,
): ThreeDCoordinate => {
    return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
};

// Simulate useState
export const simpleState = (
    initialValue: string,
): [() => string, (v: string) => void] => {
    let str: string = initialValue;

    return [
        // get the state
        () => str,
        // set the state
        (v: string) => {
            str = v;
        },
    ];
};
