

const users = [
  { id: '1', fullname: 'Rana Mohamed', email: 'rana@test.com', dob: '2003-09-024' },
  { id: '2', fullname: 'Salma yasser', email: 'salma@test.com',  dob: '2003-08-16' },
];

const comments = [
  { id: '1', title: 'Great!', content: 'Really helpful article', articleId: '1' },
  { id: '2', title: 'Nice',   content: 'Well written',           articleId: '1' },
];

const articles = [
  { id: '1', title: 'GraphQL Intro', content: 'GraphQL is awesome', authorId: '1' },
];

module.exports = { users, comments, articles };
