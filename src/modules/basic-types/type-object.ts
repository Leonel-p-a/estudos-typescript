// let programmer: { name: string, age: number, skills?: string[] } = {

// }

let programmer = {
    name: 'Leonel',
    age: 26,
    skills: ['JavaScript', 'TypeScript']
};

// programmer.skills = 'JavaScript, TypeScript, React.js';

export function showProgrammer(programmer: { name: string, age: number, skills?: string[]}) {
    console.log(programmer);
}

showProgrammer(programmer);
showProgrammer({ name: 'Roberta', age: 20, skills: ['PHP']});