export const bootstrap = (): void => {
    type Item = {
        id: string,
        [key: string] : string | null
    };

    // fetch para um end-point de uma API
    const response: Item[] = [
        { id: 'jaiq92wwks', serie: 'One Piece'},
        { id: 'lsqwlpsok1', song: 'Love Story'},
        { id: 'p2k1w1e2s2', song: 'Fearless'}
    ];

    function showItems(items: Item[]): void {
        const body = document.querySelector('body');

        if (body instanceof HTMLBodyElement) {
            items.map(item => {
                const itemElement = document.createElement('div');

                if ('song' in item) {
                    itemElement.textContent = item.song;
                    itemElement.style.backgroundColor = 'red';
                } else if ('serie' in item) {
                    itemElement.textContent = item.serie;
                    itemElement.style.backgroundColor = 'blue';
                }

                body.appendChild(itemElement);
            })
        }
    }

    showItems(response);
};