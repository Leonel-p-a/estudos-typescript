// let numbers: readonly (number)[] = [10, 20, 30, 40, 50];
let numbers: ReadonlyArray<number> = [10, 20, 30, 40, 50];

let numbersTuple: readonly [number, number, number, number, number] = [10, 20, 30, 40, 50];

// numbers[0] = 30;
// numbersTuple[1] = 100;

let numbersCopy = numbers.map(value => value * 2);

console.log(numbers);
console.log(numbersCopy);
console.log(numbersTuple);

export default () => {};