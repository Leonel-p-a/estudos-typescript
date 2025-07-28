export const bootstrap = (): void => {
    interface Article {
        title?: string,
        subtitle?: string,
        description?: string,
        createAt?: Date,
        public?: boolean
    };

    const draft: Article = { 
        title: 'Required',
    };

    
    draft.subtitle = 'Explaining about the Required Type';
    draft.description;
    draft.createAt;
    draft.public;

    const completeArticle: Required<Article> = {
        title: draft.title ?? '',
        subtitle: draft.subtitle ?? '',
        description: draft.description ?? '',
        createAt: draft.createAt ?? new Date(),
        public: draft.public ?? false,
    }

    if (isCompleteArticle(draft)) {
        publishArticle(draft);
    } else {
        console.log('O artigo não está completo!')
    }

    function publishArticle(article: Required<Article>): void {
        console.log('Publicando o artigo: ', article);
    }

    function isCompleteArticle(article: Article): article is Required<Article> {
        return article.title !== undefined && article.subtitle !== undefined && article.description !== undefined && article.createAt !== undefined && article.public !== undefined
    }

    publishArticle(completeArticle);

    console.log(isCompleteArticle(draft));
}