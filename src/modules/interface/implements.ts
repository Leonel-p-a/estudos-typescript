export const bootstrap = ():  void  => {
    interface Resume {
        fullName: string,
        email: string,
        skills: Skill[],
        addSkill: (...skill: Skill[]) => boolean
    };

    interface Skill {
        name: string,
        level: 'beginner' | 'intermediate' | 'advanced'
    };

    interface Resume {
        dateOfBirth?: Date,
        summary?: string
    }

    class MyResume implements Resume {
        constructor(
            public fullName: string,
            public email: string,
            public skills: Skill[],
        ) {
            
        }

        addSkill(...skill: Skill[]): boolean {
            const initialLength = this.skills.length
            this.skills.push(...skill);

            return this.skills.length > initialLength;
        }
    }

    const myResume = new MyResume('Leonel Pereira de Almeida', 'leonelalmeida.10.la@gmail.com', [ { name: 'JavaScript', level: 'advanced' }, { name: 'TypeScript', level: 'intermediate' }]);

    console.log(myResume);

    myResume.addSkill({ name: 'React.js', level: 'beginner' }); // adiciona o objeto ao array

    console.log(myResume.addSkill({name: 'Next.js', level: 'beginner'})); // exibe 'true' e adiciona o objeto ao array

    myResume.addSkill({ name: 'HTML', level: 'advanced' }, { name: 'CSS', level: "advanced" });

    console.log(myResume);
}