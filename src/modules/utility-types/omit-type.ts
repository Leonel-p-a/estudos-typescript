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

    interface ArticlePreview extends Omit<Article, 'subtitle' | 'description'> {}

    type ArticlePreviewType = Omit<Article, 'subtitle' | 'description'>

    const articlePreview: ArticlePreviewType = {
        title: 'Dominando o TypeScript',
        createAt: new Date(),
        public: true
    }

    console.log(articlePreview);
}