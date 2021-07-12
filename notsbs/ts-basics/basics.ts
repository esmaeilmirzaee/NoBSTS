export function useState<T>(initialValue: T): [() => T, (v: T) => void] {
    let val: T = initialValue;
    return [
        () => val,
        (v: T) => {
            val = v;
        },
    ];
}

interface Rank<T> {
    item: T;
    rank: number;
}

export function Ranker<T>(items: T[], rank: (v: T) => number): T[] {
    const ranks: Rank<T>[] = items.map((item) => ({
        item,
        rank: rank(item),
    }));

    ranks.sort((a, b) => a.rank - b.rank);

    return ranks.map((rank) => rank.item);
}
