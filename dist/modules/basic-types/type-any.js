// Evitar uso de type any, pois o TS perde a sua tipagem estática, que é seu ponto forte,
//  e acaba permitindo erros em runtime
// Exemplo:
export function handleFileUploadTeste(file) {
    console.log(`Nome do arquivo: ${file.name}`);
    console.log(`Tamanho do arquivo: ${file.zize}`); // aqui o file.zize retornará 'undefined'
}
const file1 = {
    name: 'lista_de_funcionarios.txt',
    size: 372811
};
handleFileUploadTeste(file1);
// Percebaque no exemplo acima, se passar uma propriedade do objeto errada,
// o TS não vai acusar erro, pois  a função não referencia file: any ao
// objeto file = {}. Assim, ele pode esperar uma propriedade de file sendo .zize,
// o que não é o que VOCÊ espera.
// Para evitar isso, evite sempre que possível o type any, e prefira utilizar a tipagem estática
// Por exemplo, o type alias permite uma abordagem segura e e flexível:
export function handleFileUpload(file) {
    console.log(`Nome do arquivo: ${file.name}`);
    console.log(`Tamanho do arquivo: ${file.size}`);
}
const file = {
    name: 'lista_de_funcionarios.txt',
    size: 372811
};
handleFileUpload(file);
// A abordagem acima permite flexibilidade, usando um type alias que recebe name: string e size: number
// ou seja, se o arquivo (file: FileType = {}) receber qualquer outro arquivo, considerando a tipagem
// para cada propriedade de seu objeto (name: string e size: number), o TS permitirá rodar sem problemas
// Mas se houver algum erro, como file.zize na função, o TS acusará erro, pois no parâmetro
// foi definido que file: FileType, ou seja, ele sabe que espera as propriedades name e size
