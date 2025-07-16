let movies = {
    movie1: {
        title: 'A Origem',
        year: 2010,
        isFavorite: true,
        genre: 'Ficção científica',
        director: 'Christopher Nolan'
    },
    movie2: {
        title: 'Um Sonho de Liberdade',
        year: 1994,
        isFavorite: true,
        genre: 'Drama',
        runtime: 142
    },
    movie3: {
        title: 'The Godfather',
        year: 1972,
        isFavorite: false,
        genre: 'Crime'
    }
};
export function showMovies(movies) {
    movies.movie1.title = 'Teste';
    console.log(movies);
}
showMovies(movies);
