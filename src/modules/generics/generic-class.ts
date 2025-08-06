export const bootstrap = (): void => {
    class Stack<T> {
        constructor(private stack: T[]) { }

        last(): T | undefined {
            if (this.stack.length > 0) return this.stack[this.stack.length - 1];
        }
    }

    type Product = { id:number, name: string };

    const products: Product[] = [
        { id: 1, name: 'Smartphone' },
        { id: 2, name: 'Laptop' },
        { id: 3, name: 'Car' },
    ];

    const stack1 = new Stack(products);
    const stackLastItem = stack1.last();
    console.log(stackLastItem?.name);

    const stack2 = new Stack(['Leonel', 'Roberta', 'casados']);
    const stack2LastItem = stack2.last();
    console.log(stack2LastItem?.toUpperCase());
}