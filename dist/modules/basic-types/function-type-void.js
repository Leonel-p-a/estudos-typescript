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
// Função do tipo void para somar os valores dos itens
export function calculateTotal(shoppingCart) {
    const total = shoppingCart.cardItems.reduce((acc, item) => acc + item.price, 0);
    console.log(`Total do carrinho ${total.toFixed(2)}`);
}
calculateTotal(shoppingCart);
