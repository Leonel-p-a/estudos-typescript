type FileType = {
    readonly name: string;
    readonly size: number;
}

const file: FileType = {
    name: 'lista_de_funcionarios.txt',
    size: 372811
}

// file.name = 'lista_de_casamento.docx'

export function handleFileUpload(file: FileType) {
    console.log(`Nome do arquivo: ${file.name}`);
    console.log(`Tamanho do arquivo: ${file.size}`)
}

handleFileUpload(file);

const person = { name: "Ana" };
// person = { name: 'Roberta' }; // ❌ Erro
person.name = "Carlos"; // ✅ Permitido!

console.log(person);

const numbers = [1, 2, 3];
numbers.push(4); // ✅
// numbers = [10, 20]; // ❌ Erro
numbers[1] = 5; // ✅

console.log(numbers);

const obj = Object.freeze({ nome: "Leonel" });
// obj.nome = "Carlos"; // ❌ silenciosamente ignorado (ou erro em modo estrito)

const usuario = {
  nome: "Leonel",
  idade: 30
} as const;

// usuario.nome = "Carlos"; //❌ erro em tempo de compilação