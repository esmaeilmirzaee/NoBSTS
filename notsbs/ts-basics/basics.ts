export function printIngredient(
    quantity: string,
    ingredient: string,
    extra?: string,
): void {
    console.log(`${quantity} ${ingredient} ${extra ? extra : ''}`);
}

export interface User {
    name: string;
    info?: {
        email?: string;
    };
}

// Type 'undefined' is not assignable to type 'string'.
export const getEmail = (user: User): string => {
    if (user.info) {
        return user.info.email!;
    }
    return '';
};

export const getEmailCoalescingWay = (user: User): string => {
    return user?.info?.email ?? '';
};

export const addWithCallback = (
    x: number,
    y: number,
    callback?: (a: number, b: number) => void,
) => {
    console.log(callback?.(x, y));
};
