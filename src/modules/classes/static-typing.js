class Product {
    name = 'Notebook';
    price = 4499.90;

    showDetails() {
        console.log(`${this.name}: R$ ${this.price}`);
    }
}

const product = new Product();
product.showDetails();
console.log(product.name);