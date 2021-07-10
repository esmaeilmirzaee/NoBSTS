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

export const getEmailCoercingWay = (user: User): string => {
    return user?.info?.email ?? '';
};
