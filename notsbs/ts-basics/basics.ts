export function pluck<DataType, KeyType extends keyof DataType>(
    items: DataType[],
    key: KeyType,
): DataType[KeyType][] {
    return items.map((item) => item[key]);
}

interface BaseEvent {
    user: string;
    time: string;
}

interface EventMap {
    addToCart: BaseEvent & { productId: number; quantity: number };
    checkout: BaseEvent;
}

export function SendEvent<Name extends keyof EventMap>(
    name: Name,
    data: EventMap[Name],
) {
    console.log([name, data]);
}
