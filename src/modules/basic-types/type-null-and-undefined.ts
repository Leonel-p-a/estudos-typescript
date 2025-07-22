export const bootstrap = (): void => {
    // Null
    let title = null;
    console.log(title);
    console.log(title ? 'verdadeiro' : 'falso');

    // Undefined
    let subtitle = undefined;
    console.log(subtitle);
    console.log(subtitle ? 'verdadeiro' : 'falso');

    type Page = {
        title: string,
        subtitle?: string,
        handlerPage?: () => void
    };

    const page: Page = {
        title: 'Curso de Typescript',
        // handlerPage: (): void => {
        //     console.log('Exceutou a função');
        // }
    }

    page.handlerPage = (): void => {
        console.log('Executou a função');
    }

    console.log('Page subtitle: ', page.subtitle);
    console.log('Page handlerPage: ', page.handlerPage);
    console.log('Page handlerPage: ', page.handlerPage());
};