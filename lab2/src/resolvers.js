
const { users, comments, articles } = require('./db');

const resolvers = {
  Query: {
    articles: () => articles,

    article: (_, { id }) => articles.find(a => a.id === id),
  },

  Mutation: {
    createArticle: (_, { title, content, authorId }) => {
      const newArticle = {
        id: String(articles.length + 1),
        title,
        content,
        authorId,
      };
      articles.push(newArticle);
      return newArticle;
    },
  },

  Article: {
    author:   (article) => users.find(u => u.id === article.authorId),
    comments: (article) => comments.filter(c => c.articleId === article.id),
  },
};

module.exports = { resolvers };
