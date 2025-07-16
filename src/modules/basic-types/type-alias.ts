type Salary = number | string;

type Programmer = {
    name: string;
    age: number;
    skills?: string[];
    contact?: { email?: string; phone?: string };
    salary?: Salary
}

export function showProgrammer(programmer: Programmer) {
    console.log(programmer);
}

showProgrammer({
    name: 'Leonel',
    age: 26,
    skills: ['JavaScript', 'TypeScript'],
    contact: {
        email: 'leonelalmeida.10.la@gmail.com',
        phone: '(21) 97615-7347'
    },
    salary: 3500
});

type Produto = {
    nome: string;
    preco: number;
    emEstoque: boolean;
};

let item: Produto = {
    nome: "Notebook",
    preco: 3500,
    emEstoque: true
};

console.log(item);