export const bootstrap = (): void => {
    type ConstructorFunction = { new(...args: any[]): {} }

    function AddLogMethod(dateFormat: string, prefix: string) {
        return function <T extends ConstructorFunction>(constructor: T): T {            
            constructor.prototype.loggerInfo = function() {
                console.log(`${prefix} - ${new Date().toLocaleString(dateFormat)} - ${JSON.stringify(this)} - ${constructor.name}`);
            }
            return constructor;
        };
    }

    @AddLogMethod('pt-BR', '[LOG]')
    class Product {
        name: string;
        // loggerInfo!: () => void;
        constructor(name: string) {
            this.name = name;
        }
    }

    @AddLogMethod('pt-BR', '[LOG]')
    class Person {
        private _name: string;
        private _age: number;
        // loggerInfo!: () => void;

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
    console.log(product.name);
    ( product as any ).loggerInfo();

    const person = new Person('Roberta', 20);
    console.log(`${person.name} - ${person.age} anos`);
    ( person as any ).loggerInfo();
};