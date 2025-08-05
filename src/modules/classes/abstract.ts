export const bootstrap = (): void => {
    // Dá forma aos objetos sem se preocupar com a lógica
    // Não suporta operadores de visibilidade (public, protected e private)
    interface VehicleInterface {
        type: string;
        description(): string;
    };

    // Dá forma aos objetos e pode implmentar lógica
    // Suporta operadores de visibilidade
    abstract class VehicleAbstract {
        // abstract type: string;
        constructor(protected readonly type: string) {
            this.type = type;
        }
        abstract description(): string;
    };

    // Interfaces são implementadas. Podemos implementar N interfaces
    class BicycleWithInterface implements VehicleInterface {
        constructor(public readonly type: string) {
            this.type = type
        }

        description(): string {
            return `Tipo do veículo: ${this.type}`;
        }
    }

    const bicycleWithInterface = new BicycleWithInterface('Bicicleta');
    console.log(bicycleWithInterface.description());

    // Classes abstratas são extendidas. Suporta a extensão de apenas uma classe
    class MotorcycleWithAbstract extends VehicleAbstract {
        constructor(public readonly type: string) {
            super(type);
            this.type = type;
        }

        description(): string {
            return `Tipo do veículo: ${this.type}`;
        }
    }

    const motorcycleWithAbstract = new MotorcycleWithAbstract('Moto');
    console.log(motorcycleWithAbstract.description());
};