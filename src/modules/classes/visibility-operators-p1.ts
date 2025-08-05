export const bootstrap = (): void => {
    class Product {
        public name: string;
        protected price: number;
        private stock: number;

        constructor(name: string, price: number, stock: number) {
            this.name = name;
            this.price = price;
            this.stock = stock;
        }
    }

    class Eletronic extends Product {
        showDetails(): string {
            // ACESSO NA SUBCLASSE
            return `Detalhes: ${this.name} - ${this.price.toFixed(2)}`;
        }
    }

    const eletronicos = new Eletronic('Notebook', 3459.90, 20);
    console.log(eletronicos.showDetails()); // Detalhes: Notebook - 3.459.90

    // ACESSO FORA DA CLASSE
    const product = new Product('Smartphone', 4099.90, 12);
    console.log(product.name); // Smartphone
};