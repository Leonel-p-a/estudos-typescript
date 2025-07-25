export const bootstrap = ():  void  => {
    let birthday = new Date(1998, 8, 30);

    type Font = 'arial' | 'open sans';
    type ColorScheme = 'light' | 'dark';
    type Layout = 'one-collumn' | 'two-collumn';

    class MyResume implements Resume {
        constructor(
            public fullName: string,
            public email: string,
            public skills: Skill[],
            public dateOfBirth: string,
            public summary: string,
            public font: Font,
            public colorScheme: ColorScheme,
            public layout: Layout
        ) {}

        addSkill(...skill: Skill[]): boolean {
            const initialLength = this.skills.length
            this.skills.push(...skill);

            return this.skills.length > initialLength;
        }
    }

    const myResume = new MyResume(
        'Leonel Pereira de Almeida',
        'leonelalmeida.10.la@gmail.com',
        [ { name: 'JavaScript', level: 'advanced' },
            { name: 'TypeScript', level: 'intermediate' }],
            birthday.toLocaleDateString(),
            'Estudante de CC...',
            'arial',
            'dark',
            'one-collumn');

    console.log(myResume);
}