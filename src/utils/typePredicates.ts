function isGameArray(data: any): data is Game[] {
    return (
        Array.isArray(data) &&
        data.every(
            (item) =>
                typeof item.id === 'number' &&
                typeof item.title === 'string' &&
                typeof item.year === 'number' &&
                typeof item.genre === 'string'
        )
    )
}

function isCarArray(data: any): data is Array<Car> {
    return (
        Array.isArray(data) &&
        data.every(
            (item) =>
                typeof item.id === 'number' &&
                typeof item.brand === 'string' &&
                typeof item.model === 'string' &&
                typeof item.year === 'number' &&
                typeof item.type === 'string' &&
                typeof item.engine === 'string'
        )
    )
}

export { isGameArray, isCarArray };