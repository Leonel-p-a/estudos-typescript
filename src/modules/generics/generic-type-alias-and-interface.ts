export const bootstrap = (): void => {
    interface TableProps<T> {
        data: T[];
        columns: Array<{ 
            header: string, 
            accessor: (item: T) => string | number 
        }>;
    }

    function createTable<T>({ data, columns }: TableProps<T>): HTMLTableElement {
        // console.log(data); // Desestruturação
        // console.log(columns); // Desestruturação
        const table = document.createElement('table');
        table.setAttribute('border', '1');

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        columns.forEach(column => {
            const th = document.createElement('th');
            th.textContent = column.header;
            headerRow.appendChild(th);
        });


        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');

        data.forEach(item => {
            const bodyRow = document.createElement('tr');

            columns.forEach(column => {
                const td = document.createElement('td');
                td.textContent = String(column.accessor(item));
                bodyRow.appendChild(td);
            })

            tbody.appendChild(bodyRow);
        })

        table.appendChild(tbody);

        return table;
    }

    interface Game {
        id: string,
        title: string,
        price: number
    };

    const games: Game[] = [
        { id: '1', title: 'FC26', price: 349.90 },
        { id: '2', title: 'Mario Kart', price: 279.99 },
        { id: '3', title: 'Sparking Zero', price: 249.99 },
        { id: '4', title: 'Need For Speed', price: 59.90 },
        { id: '5', title: 'Zelda', price: 319.99 },
    ]

    const table = createTable({
        data: games,
        columns: [
            { header: 'ID', accessor: (game: Game) => game.id },
            { header: 'Título', accessor: (game: Game) => game.title },
            { header: 'Preço', accessor: (game: Game) => game.price }
        ]
    });
    document.body.appendChild(table);

    // 

    interface Movie {
        id: number;
        title: string;
        genre: string;
        year: number;
    };

    const movies: Movie[] = [
        { id: 1, title: 'Meu malvado favorito', genre: 'Animação e ação', year: 2012},
        { id: 2, title: 'Madagascar', genre: 'Animação e comédia', year: 2008},
        { id: 3, title: 'A era do gelo', genre: 'Animação', year: 2002},
        { id: 4, title: 'Zootopia', genre: 'Animação', year: 2013},
        { id: 5, title: 'Detona Ralph', genre: 'Animação', year: 2015}
    ]

    const tableMovies = createTable<Movie>({
        data: movies,
        columns: [
            { header: 'ID', accessor: (movie: Movie) => movie.id },
            { header: 'Título', accessor: (movie: Movie) => movie.title },
            { header: 'Gênero', accessor: (movie: Movie) => movie.genre },
            { header: 'Ano', accessor: (movie: Movie) => movie.year }
        ]
    });
    document.body.appendChild(tableMovies);
}