export const bootstrap = (): void => {
    console.log('Int - Max Safe: ', Number.MAX_SAFE_INTEGER);
    console.log('Int - Max Safe: ', Number.MIN_SAFE_INTEGER);

    let bigIntNumber: bigint = 9007199254740991n;
    console.log('Atribuição com o sufixo n: ', bigIntNumber);

    let bigIntNumber2: bigint = BigInt('9007199254740991');
    console.log('Atribuição com o sufixo n: ', bigIntNumber2);
};