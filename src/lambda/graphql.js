const { ApolloServer, gql } = require("apollo-server-lambda");
const characters = require("./characters.json");

const typeDefs = gql`
  type Character {
    id: Int
    name: String
    height: Float
    mass: Float
    gender: String
    homeworld: String
    wiki: String
    image: String
    born: Float
    bornLocation: String
    died: Float
    diedLocation: String
    species: String
    hairColor: String
    eyeColor: String
    skinColor: String
    cybernetics: String
    affiliations: [String]
    formerAffiliations: [String]
  }

  type Query {
    characters: [Character]
    character(id: Int): Character
  }
`;

const resolvers = {
  Query: {
    characters: () => characters,
    character: (id) => characters.find((character) => character.id == id),
  },
};

const getHandler = (event, context) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    debug: true,
  });
  const graphqlHandler = server.createHandler();
  if (!event.requestContext) {
    event.requestContext = context;
  }
  return graphqlHandler(event, context);
};

exports.handler = getHandler;
