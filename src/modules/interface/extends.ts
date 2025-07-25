export const bootstrap = ():  void  => {
    interface PersonalInfo {
        fullName: string,
        email: string,
        dateOfBirth: string,
        summary: string
    }

    let birthday = new Date(1998, 8, 30);
    
    interface Resume extends PersonalInfo, Theme {
        skills: Skill[],
        addSkill: (...skill: Skill[]) => boolean
    };

    interface Skill {
        name: string,
        level: 'beginner' | 'intermediate' | 'advanced'
    };

    interface Theme {
        font: Font,
        colorScheme: ColorScheme,
        layout: Layout
    };

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
        ) {
            
        }

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