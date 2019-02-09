const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
/* const cors = require("cors"); */
const path = require("path");
require("dotenv").config({ path: "variables.env" });

const Deck = require("./models/Deck");
const Card = require("./models/Card");

//graphql middleware
const { graphiqlExpress, graphqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

//schemas
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");

//create graphql schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

//connected db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));

//init app

const app = express();

//from where request should be accepted
/* const corsOptions = {
  origin: "http://localhost:19000",
  credentials: true
};
app.use(cors(corsOptions)); */

//create graphql app
/* app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" })); */

//connect chemas to graphql
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({
    schema,
    context: {
      Deck,
      Card
    }
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`liseting ${PORT}`);
});
