const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const cors = require("cors");
const axios = require("axios");
const path = require("path");

require("dotenv").config();

const PORT = 8000;

//starts a server
const server = express();

// use github graphql
server.use(cors());
server.use(
  "https://api.github.com/graphql",
  expressGraphQL({
    graphiql: true,
  })
);

const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + process.env.REACT_GITHUB_API_KEY,
};

server.get("/github", (req, res) => {
  const options = {
    url: "https://api.github.com/graphql",
    method: "post",
    headers: headers,
  };
});

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
