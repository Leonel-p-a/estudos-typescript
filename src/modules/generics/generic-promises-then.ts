export const bootstrap = (): void => {
    const promise = new Promise((resolve, reject) => {
        if (false) {
            reject('Rejeitada');
        }
        
        resolve('Resolvida');
    })

    // Função assíncrona
    async function promiseFunction() {
        return 200;
    }

    promiseFunction();
    
    fetch('https://argus-academy.com/mock/api/games/')
        .then(response => {
            if (!response.ok) {
                console.error('Erro HTTP: ', `${response.status} - ${response.statusText}`);
            }
            response.json().then(data => console.log(data))     
        })
};