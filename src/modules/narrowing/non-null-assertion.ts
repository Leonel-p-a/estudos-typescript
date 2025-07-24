export const bootstrap = ():void => {
    const subtitle = document.getElementById('subtitle')!;

    // if(subtitle) {
    //     subtitle.style.color = 'lightblue';
    // }

    subtitle.style.color = 'lightblue';

    const getProducts = (): string[] | null => {
        return ['Smartphone', 'Laptop'];
    };

    // define que a atribuição não será null ou undefined
    const products = getProducts()!;

    products.map((item) => console.log(item));
}