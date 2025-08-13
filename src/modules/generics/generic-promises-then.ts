export const bootstrap = (): void => {
    interface Game {
        id: number;
        title: String;
        genre: string;
        year: number;
    }

    function isGameArray(data: any): data is Game[] {
        return (
            Array.isArray(data) &&
            data.every(
                (item) =>
                    typeof item.id === 'number' &&
                    typeof item.title === 'string' &&
                    typeof item.year === 'number' &&
                    typeof item.genre === 'string'
            )
        )
    }

    fetch('https://argus-academy.com/mock/api/games/')
        .then(response => {
            if (!response.ok) {
                console.error('Erro HTTP: ', `${response.status} - ${response.statusText}`);
            }

            // // Type Assertion
            // return response.json() as Promise<Array<Game>>;  
            return response.json();
        }).then(data => {
            if (isGameArray(data)) {
                console.log(data);
            } else {
                console.error('Tipo de dado inesperado');
            }
        })

        // --------

        interface Car {
        id: number;
        brand: String;
        model: string;
        year: number;
        type: string;
        engine: string;
    }

    function isCarArray(data: any): data is Array<Car> {
        return (
            Array.isArray(data) &&
            data.every(
                (item) =>
                    typeof item.id === 'number' &&
                    typeof item.brand === 'string' &&
                    typeof item.model === 'string' &&
                    typeof item.year === 'number' &&
                    typeof item.type === 'string' &&
                    typeof item.engine === 'string'
            )
        )
    }

    fetch('https://argus-academy.com/mock/api/cars/')
        .then(response => {
            if (!response.ok) {
                console.error('Erro HTTP: ', `${response.status} - ${response.statusText}`);
            }

            // // Type Assertion
            // return response.json() as Promise<Array<Game>>;  
            return response.json();
        }).then(data => {
            if (isCarArray(data)) {
                console.log(data);
            } else {
                console.error('Tipo de dado inesperado');
            }
        })
};