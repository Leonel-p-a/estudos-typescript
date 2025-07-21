// CartItem
type CardItem = {
    id: number,
    price: number
}

type Address = {
    cep: string,
    default: boolean
}

type Customer = {
    adresses: Address[];
}

// ShoppingCart
type ShoppingCart = {
    cardItems: CardItem[]
}

// Criar variável do tipo ShoppingCart contendo CardItem
const shoppingCart: ShoppingCart = {
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

const adresses: Address[]  = [
    { cep: '00000-000', default: false},
    { cep: '00000-001', default: true},
    { cep: '00000-002', default: false},
];

const customer: Customer = {
    adresses: adresses
};

// ---

type ApplyDiscountFn = (total: number, discount: number) => number;

const applyDiscount: ApplyDiscountFn = (total: number, discount: number): number => {
    return total - total * discount;
}

type calculateTotalFn = (sC: ShoppingCart, callback: ApplyDiscountFn) => number;

let calculateTotal: calculateTotalFn = (shoppingCart: ShoppingCart, applyDiscount: ApplyDiscountFn): number => {
    const total = shoppingCart.cardItems.reduce((acc, item) => acc + item.price, 0);
    return applyDiscount(total, 0.25);
}

type AddressOrUndefined = (c: Customer) => Address | undefined;

const getPrincipalAddress: AddressOrUndefined = (customer: Customer): Address | undefined => {
    return customer.adresses.find(address => address.default);
}

// ---

const total = calculateTotal(shoppingCart, applyDiscount);

console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);

// ---

const principalAddress = getPrincipalAddress(customer);

console.log(principalAddress);

export { getPrincipalAddress, calculateTotal };