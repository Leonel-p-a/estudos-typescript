export const bootstrap = (): void => {
    function speakText(text: string):void {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-BR';
        window.speechSynthesis.speak(utterance);
    }

    type ElementForReading<T> = {
        text: string;
        element: T;
    }

    function extractHTMLElement<T extends HTMLElement>(element: T): ElementForReading<T> | null {
        const text = element.innerText;

        if (!text) {
            console.log('Elemento não possui texto para ser lido');
            return null;
        }
        return { text: text, element: element };
    }

    const element1 = document.getElementById('course'); // HTMLElement | null
    const element2 = document.querySelector('a'); // HTMLElement <- HTMLAnchorElement | null

    document.getElementById('play')?.addEventListener('click', () => {
        if (element1) {
            const el = extractHTMLElement(element1);
            if (el) {
                speakText(el.text);
                el.element.style.color = 'lightblue';
            }
        }
    });
}