export const bootstrap = (): void => {
    // FUNÇÃO GENÉRICA
    function processAndReturn<T>(value: T): T {
        return value;
    }

    const series = processAndReturn('One Piece');
    console.log(series.toUpperCase());

    const isAvailable = processAndReturn(true);
    console.log(isAvailable);

    const subscribers = processAndReturn(3000);
    console.log(subscribers);
}