export const bootstrap = (): void => {
    class Product {
        name: String = 'Notebook';
        price: number = 4499.90;

        showDetails(): void {
            console.log(`${this.name}: R$ ${this.price}`);
        }
    }

    const product = new Product();
    product.showDetails();
    console.log(product.name);
};