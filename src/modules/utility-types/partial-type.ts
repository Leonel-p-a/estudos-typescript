export const bootstrap = (): void => {
    interface Article {
        title: string,
        subtitle: string,
        description: string,
        createAt: Date,
        public: boolean
    }

    // type ArticleType = {
    //     title: string,
    //     subtitle: string,
    //     description: string,
    //     createAt: Date,
    //     public: boolean
    // }

    interface PartialArticle extends Partial<Article> {}
    type PartialArticleType = Partial<Article>;

    const draft: PartialArticleType = {
        title: 'Utilizando o Partial'
    }

    draft.subtitle = 'Utilize as propriedades opcionais para objetos que irão evoluir ao longo da aplicação, como formulários multi-steps'

    console.log(draft)
}