export const bootstrap = (): void => {
    class User {
        constructor(
            private _name: string,
            private age: number,
            private _bio?: string) { }
        
        get name(): string {
            return this._name;
        }

        set bio(bio: string) {
            this._bio = bio;
        }

        get bio(): string {
            return this._bio || 'Biografia indisponível';
        }
    }

    const user = new User('Leonel Almeida', 26, 'Desenvolvedor Front-end com experiência em desenvolvimento de websites responsivos');
    console.log(user.bio);

    user.bio = 'Programador Front-end';

    console.log(user.bio);
    console.log(user.name);
    console.log(`${user.name} é um ${user.bio} com foco em aplicações web responsivas e de alta performance`);
}