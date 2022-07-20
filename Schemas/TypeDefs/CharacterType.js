const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
  GraphQLList,
} = require("graphql");

const CharacterType = new GraphQLObjectType({
  name: "Character",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    height: { type: GraphQLFloat },
    mass: { type: GraphQLFloat },
    gender: { type: GraphQLString },
    homeworld: { type: GraphQLString },
    wiki: { type: GraphQLString },
    image: { type: GraphQLString },
    born: { type: GraphQLFloat },
    bornLocation: { type: GraphQLString },
    died: { type: GraphQLFloat },
    diedLocation: { type: GraphQLString },
    species: { type: GraphQLString },
    hairColor: { type: GraphQLString },
    eyeColor: { type: GraphQLString },
    skinColor: { type: GraphQLString },
    cybernetics: { type: GraphQLString },
    affiliations: { type: new GraphQLList(GraphQLString) },
    // masters: { type: new GraphQLList(GraphQLString) },
    // apprentices: { type: new GraphQLList(GraphQLString) },
    formerAffiliations: { type: new GraphQLList(GraphQLString) },
  }),
});

module.exports = CharacterType;
