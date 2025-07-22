export const bootstrap = (): void => {
    // const title: symbol = Symbol('HOME');
    // const pageTitle: symbol = Symbol('HOME');

    // if ('HOME' === 'HOME') {
    //     console.log('Sim, HOME e HOME são iguais');
    // }

    // if (title !== pageTitle) {
    //     console.log('Não são iguais');
    // }

    const titleSymbol: symbol = Symbol('title');
    const Page = {
        title: 'HOME',
        [titleSymbol]: 'Pagina principal'
    };

    console.log(Page.title);
    console.log(Page[titleSymbol]);

    console.log(Page);
};