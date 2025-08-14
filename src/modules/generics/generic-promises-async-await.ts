import { isGameArray, isCarArray } from "../../utils/typePredicates.js";

export const bootstrap = async (): Promise<void> => {
    async function fetchData<T>(url: string, typePredicateCallback: (data: any) => boolean): Promise<T | null> {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                console.error(`Erro HTTP: ${response.status} - ${response.statusText}`);
            }
            const data = await response.json();
            return typePredicateCallback(data) ? data as T :  null;
        } catch (error) {
            return null;
        }
    }

    const resp1 = await fetchData<Array<Game>>('https://argus-academy.com/mock/api/games/', isGameArray);
    console.log(resp1);

    console.log('-------------------------');

    const resp2 = await fetchData<Array<Car>>('https://argus-academy.com/mock/api/cars/', isCarArray);
    console.log(resp2);
};