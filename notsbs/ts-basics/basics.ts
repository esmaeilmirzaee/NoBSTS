// Enums
export enum LoadingState {
    beforeLoading = 'BeforeLoading',
    loading = 'Loading',
    loaded = 'Loaded',
}

export const isLoading = (state: LoadingState): boolean =>
    state.toLowerCase() === LoadingState.loading.toLowerCase();

// Literals
export const rollDice = (times: 1 | 2 | 3): number => {
    let pip: number = 0;
    for (let i = 0; i < times; i++) {
        pip += Math.floor(Math.random() * 5) + 1;
    }

    return pip;
};

export function sendEvent(name: 'checkout', data: { productId: number }): void;
export function sendEvent(name: 'addToCard', data: { cartCount: number }): void;
export function sendEvent(name: string, data: unknown): void {
    console.log(`${name} ${JSON.stringify(data)}`);
}
