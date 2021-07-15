// Mapped Type
// User type has a required field, name, and a set of flexible optional fields.
// & Merges a flexible type
export type User = {
    name: string;
} & Record<string, string | boolean | number>;

// The same thing in other implementation
export type Group = {
    name: string;
    [key: string]: string | number | boolean;
};

type OptionalFlags<T> = {
    [Property in keyof T]: null;
};

type UserOptionalFlags = OptionalFlags<User>;

export function objectModifier<T>(obj: T, listeners: Listeners<T>): void {
    throw new Error('Needs to be implemented.');
}

// Template literals
type Listeners<T> = {
    [Property in keyof T as `on${Capitalize<string & Property>}Change`]?: (
        n: T[Property],
    ) => void;
} &
    {
        [Property in keyof T as `on${Capitalize<
            string & Property
        >}Delete`]?: () => void;
    };

type UserListener = Listeners<User>;
