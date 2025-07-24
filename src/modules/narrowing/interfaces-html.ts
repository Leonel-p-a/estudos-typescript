export const bootstrap = (): void => {
    const input = document.querySelector('.inputText') as HTMLInputElement;

    input.addEventListener('click', (event: Event) => {
        console.log('input clicado');
    })

    console.log('Input é filho de: ', input.parentNode);
    console.log('Arrastável: ', input.draggable);
    console.log('Input: ', input.value);
}