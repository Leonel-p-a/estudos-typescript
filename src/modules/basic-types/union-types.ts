// let total: string | number = 200;

// total = '500';
let shoppingCart = [200.75, 150.12, '33,90', '44', 'not defined'];

export function totalize(values: (number | string)[]) {
    return values
        .map(value => typeof value === 'number' ? value : parseFloat(value))
        .filter(value => !isNaN(value))
        .reduce((acc, curr) => acc + curr, 0) // totalizar
}

console.log(totalize(shoppingCart));