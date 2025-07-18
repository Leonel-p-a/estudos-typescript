// Criar variável do tipo ShoppingCart contendo CardItem
const shoppingCart = {
    cardItems: [
        {
            id: 1,
            price: 199.90
        },
        {
            id: 2,
            price: 2789.99
        },
        {
            id: 3,
            price: 1259.90
        }
    ]
};
const adresses = [
    { cep: '00000-000', default: false },
    { cep: '00000-001', default: true },
    { cep: '00000-002', default: false },
];
const customer = {
    adresses: adresses
};
// ---
// let calculateTotal: (sC: ShoppingCart) => number;
let calculateTotal = (shoppingCart) => {
    const total = shoppingCart.cardItems.reduce((acc, item) => acc + item.price, 0);
    return total;
};
const getPrincipalAddress = (customer) => {
    return customer.adresses.find(address => address.default);
};
// ---
const total = calculateTotal(shoppingCart);
console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);
// ---
const principalAddress = getPrincipalAddress(customer);
console.log(principalAddress);
export { getPrincipalAddress, calculateTotal };
