import { isGameArray, isCarArray } from "../../utils/typePredicates.js";

export const bootstrap = (): void => {
    async function fetchData<T>(url: string, typePredicateCallback: (data: any) => boolean): Promise<T | null | undefined> {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    console.error('Erro HTTP: ', `${response.status} - ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                if (typePredicateCallback(data)) {
                    return data as T;
                } else {
                    return null;
                }
            })
    }

    const resp1 = fetchData<Array<Game>>('https://argus-academy.com/mock/api/games/', isGameArray);
    resp1.then(data => console.log(data));

    const resp2 = fetchData<Array<Car>>('https://argus-academy.com/mock/api/cars/', isCarArray);
    resp2.then(data => data?.forEach(car => console.log(car.model)));
};