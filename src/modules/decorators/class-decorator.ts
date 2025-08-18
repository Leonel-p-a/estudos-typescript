export const bootstrap = (): void => {
    type ConstructorFunction = { new(...args: any[]): {} }

    function AddLogMethod<T extends ConstructorFunction>(constructor: T): T {
        console.log('Chegamos no decorador');
        console.log(constructor);

        return class extends constructor {
            loggerInfo = () => {
                console.log(`${new Date().toLocaleString('pt-BR')} - ${JSON.stringify(this)}`)
            }
        }
    }

    @AddLogMethod
    class Product {
        name: string;
        loggerInfo!: () => void;
        constructor(name: string) {
            this.name = name;
        }
    }

    @AddLogMethod
    class Person {
        private _name: string;
        private _age: number;
        loggerInfo!: () => void;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        public get name() {
            return this._name;
        
        }
        public get age() {
            return this._age;
        }
    }

    const product = new Product('Laptop');
    console.log(product.name) // Roberta
    product.loggerInfo(); // 17/08/2025, 22:27:26 - {"name":"Laptop"}

    const person = new Person('Roberta', 20);
    console.log(`${person.name} - ${person.age} anos`)
    person.loggerInfo();
};