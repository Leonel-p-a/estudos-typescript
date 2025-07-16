let people = {
    person1: {
        name: 'Leonel',
        secondName: 'Almeida',
        age: 26,
        characteristics: {
            eyes: 'Dark brown',
            hair: 'Wavy dark brown',
            body: 'fit',
            height: 173,
            weight: 80.5,
            musculation: true
        },
        occupation: 'Programmer'
    },
    person2: {
        name: 'Roberta',
        secondName: 'Santos',
        age: 20,
        characteristics: {
            eyes: 'Dark brown',
            hair: 'Curly dark brown',
            height: 160,
            weight: 63,
            musculation: false
        },
        occupation: 'Student'
    }
};
export function introducePerson(person) {
    console.log(person);
}
introducePerson(people);
