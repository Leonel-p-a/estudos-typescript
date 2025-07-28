export const bootstrap = (): void => {
    interface Article {
        title?: string,
        subtitle?: string,
        description?: string,
        createAt?: Date,
        public?: boolean
    };

    const draft: Required<Article> = { 
        title: 'Required', 
        subtitle: 'Explaining about the Required Type',
        description: 'none',
        createAt: new Date(),
        public: true
    };

    function publishArticle(article: Required<Article>): void {
        console.log('Publicando o artigo: ', article);
    }

    publishArticle(draft);
}