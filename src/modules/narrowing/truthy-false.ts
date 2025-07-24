export const bootstrap = (): void => {
    const movies = [ 'Duna: Parte 2', 'Interestelar', 'Matrix'];

    const movie = movies.find(item => item.includes('Duna'));

    // type guard
    if(movie) {
        console.log(movie);
    } else {
        console.warn('Filme não encontrado');
    }
    // string

    // undefined

    // // falsy
    // console.log(false ? 'truthy' : 'false');
    // console.log(0 ? 'truthy' : 'false');
    // console.log('' ? 'truthy' : 'false');
    // console.log(null ? 'truthy' : 'false');
    // console.log(undefined ? 'truthy' : 'false');
    // console.log(NaN ? 'truthy' : 'false');

    // // truthy
    // console.log(true ? 'truthy' : 'false');
    // console.log(-1 ? 'truthy' : 'false');
    // console.log(' ' ? 'truthy' : 'false');
    // console.log([] ? 'truthy' : 'false');
    // console.log({} ? 'truthy' : 'false');
};