// Constant variables

export interface User {
    readonly id: number;
    name: string;
}

export const showUser = (u: User) => {
    console.log([u.id, u.name]);
};

export const makeCoordinate = (
    x: number,
    y: number,
    z: number,
): readonly [number, number, number] => {
    return [x, y, z];
};
