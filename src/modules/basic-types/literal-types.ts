// let logType: string = 'info';
// logType = 'war';

// let logType: 'info' | 'women' = 'info';
// logType = 'women';

type LogType = 'info' | 'warn' | 'error';

export function logger(type: LogType, message: string) {
    switch(type) {
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

export function handleFileUpload(file: FileType) {
    console.log(`Nome do arquivo: ${file.name}`);
    console.log(`Tamanho do arquivo: ${file.size}`)
}

type FileType = {
    name: string;
    size: number;
}

const file: FileType = {
    name: 'lista_de_funcionarios.txt',
    size: 372811
}

handleFileUpload(file);