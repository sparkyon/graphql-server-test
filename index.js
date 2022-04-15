const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
      title: String
      author: String
  }

  type Query {
      books: [Book]
  }
`

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
    Query: {
        books: () => books,
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

var port_number = server.listen(process.env.PORT || 4000);

server.listen(port_number).then(({ url }) => {
    console.log(`Server is ready at ${url}`)
});
