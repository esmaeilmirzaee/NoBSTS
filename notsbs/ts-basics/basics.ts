export function useState<T>(initialValue: T): [() => T, (v: T) => void] {
    let val: T = initialValue;
    return [
        () => val,
        (v: T) => {
            val = v;
        },
    ];
}
