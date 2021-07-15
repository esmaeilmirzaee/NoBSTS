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
