const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;
const { graphqlHTTP } = require("express-graphql");
const path = require("path");

const schema = require("./Schemas");

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
