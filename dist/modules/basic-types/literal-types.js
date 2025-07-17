// let logType: string = 'info';
// logType = 'war';
export function logger(type, message) {
    switch (type) {
        case 'info':
            console.log(`Info: ${message}`);
            break;
        case 'warn':
            console.warn(`Warn: ${message}`);
            break;
        case 'error':
            console.error(`Error: ${message}`);
            break;
    }
}
logger('warn', 'Log com alguma informação do que houve');
export function handleFileUpload(file) {
    console.log(`Nome do arquivo: ${file.name}`);
    console.log(`Tamanho do arquivo: ${file.size}`);
}
const file = {
    name: 'lista_de_funcionarios.txt',
    size: 372811
};
handleFileUpload(file);
