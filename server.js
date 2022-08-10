const PORT = 8000;
const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const cors = require("cors");
const axios = require("axios");
const path = require("path");

require("dotenv").config();

//starts a server
const app = express();

// use github graphql
app.use(cors());
app.use(
  "https://api.github.com/graphql",
  expressGraphQL({
    graphiql: true,
  })
);

// auth token
const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + process.env.REACT_GITHUB_API_KEY,
};

app.get("/github", (req, res) => {
  const options = {
    url: "https://api.github.com/graphql",
    method: "post",
    headers: headers,
  };
});

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
