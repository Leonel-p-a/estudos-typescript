export const bootstrap = (): void => {
    // FUNÇÃO GENÉRICA
    function identity<T>(value: T): T {
        return value;
    }

    const num = identity<number>(10);   // T = number
    const str = identity('teste');      // T = string (inferido)

    // ARRAY GENÉRICO
    function firstElement<T>(arr: T[]): T {
        return arr[0];
    }

    const nome = firstElement<string>(['Ana', 'João']);

    // INTERFACE GENÉRICA
    interface ResponseData<T> {
        data: T;
        status: number;
    }

    const userResponse: ResponseData<{ name: string }> = {
        data: { name: 'Leonel' },
        status: 200
    };

    // CLASSE GENÉRICA
    class Box<T> {
        constructor(private content: T) { }
        getContent(): T {
            return this.content;
        }
    }

    const stringBox = new Box<string>('texto');
    const numberBox = new Box<number>(123);

}