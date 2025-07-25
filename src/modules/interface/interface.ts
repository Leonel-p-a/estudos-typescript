export const bootstrap = ():  void  => {
    interface Resume {
        fullName: string,
        email: string,
        skills: Skill[],
        addSkill: (skill: Skill) => boolean
    };

    interface Skill {
        name: string,
        level: 'beginner' | 'intermediate' | 'advanced'
    };

    const myResume: Resume = {
        fullName: 'Leonel Pereira de Almeida',
        email: 'leonelalmeida.10.la@gmail.com',
        skills: [
            {
                name: 'JavaScript', level: 'advanced',
            },
            {
                name: 'TypeScript', level: 'intermediate'
            }
        ],

        addSkill(skill: Skill): boolean {
            const initialLength = this.skills.length
            this.skills.push(skill);

            return this.skills.length > initialLength;
        },
    }

    myResume.addSkill({ name: 'React.js', level: 'beginner' });

    console.log(myResume);
}