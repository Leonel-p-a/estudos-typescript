export const bootstrap = (): void => {
    const zipCodeMask = (value: string | number): string => {
        // type guard
        if(typeof value === 'number') {
            value = value.toString();
        }
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');

        return value;
    }

    const zipCode = zipCodeMask('20550035'); // 20550-035
    console.log(zipCode);

    const zipCode2 = zipCodeMask(20550035); // 20550-035
    console.log(zipCode2);
}