export function printIngredient(
    quantity: string,
    ingredient: string,
    extra?: string,
): void {
    console.log(`${quantity} ${ingredient} ${extra ? extra : ''}`);
}
