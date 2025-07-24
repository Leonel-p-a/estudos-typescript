export const bootstrap = (): void => {
    const arr: number[] | undefined = [ 1, 2, 3 ];
    // let arr: number[] | undefined;

    console.log('Typeof de array: ', typeof arr); // object
    console.log('Instanceof de array: ', arr instanceof Array); // true
    console.log('Array.isArray de array: ', Array.isArray(arr)); // true

    if (Array.isArray(arr)) {
        arr.map(item => {console.log(item)});
    }
};