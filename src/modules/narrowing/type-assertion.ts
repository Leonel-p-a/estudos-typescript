export const bootstrap = (): void => {
    const body = document.querySelector('body') as HTMLBodyElement;
    const video = document.querySelector('#promo') as HTMLVideoElement;
    const input = document.querySelector('.inputText') as HTMLInputElement;

    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    video.volume;
    input.addEventListener('blur', (event: FocusEvent) => { alert('teste') });
};