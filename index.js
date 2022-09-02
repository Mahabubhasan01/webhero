const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const port = process.env.PORT || 5000;
const schema = require("./schema");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());
require("dotenv").config();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Graphql port is running ${port}`);
});
