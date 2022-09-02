const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLID,GraphQLSchema } = graphql;
const DATA = [
  { id: 1, name: "Jack", email: "Jack@yahoo.com", phone: 3452355 },
  { id: 2, name: "Daniel", email: "Daniel@yahoo.com", phone: 9782355 },
  { id: 3, name: "Lang", email: "Langford@yahoo.com", phone: 34765355 },
  { id: 1, name: "James", email: "James@yahoo.com", phone: 3452355 },
  { id: 2, name: "Adw", email: "Adward@yahoo.com", phone: 9782355 },
  { id: 3, name: "Snow", email: "Snowden@yahoo.com", phone: 34765355 },
];
const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "Posts",
  fields: () => ({
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return DATA;
      },
    },
  }),
});

module.exports = new GraphQLSchema({ query: RootQuery });
