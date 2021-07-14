import { isLoading, LoadingState, rollDice, sendEvent } from './basics';

// Enums
console.log(isLoading(LoadingState.beforeLoading));

// Argument of type '4' is not assignable to parameter of type '1 | 2 | 3'.
// console.log(rollDice(4));
console.log(rollDice(2));

sendEvent('addToCard', { cartCount: 12 });
sendEvent('checkout', { productId: 12 });
