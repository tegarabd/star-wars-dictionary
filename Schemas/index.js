const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
} = require("graphql");

const charactersData = require("../characters.json");
const CharacterType = require("./TypeDefs/CharacterType");

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllCharacters: {
      type: new GraphQLList(CharacterType),
      resolve() {
        return charactersData;
      },
    },
    getCharacterById: {
      type: CharacterType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return charactersData.find(character => character.id === args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
