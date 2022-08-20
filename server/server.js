const PORT = 8000;
const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const cors = require("cors");
const axios = require("axios");
const path = require("path");

require('dotenv').config();

const app = express();
app.use(cors());

//github graphql
app.use(
  "https://api.github.com/graphql",
  expressGraphQL({
    graphiql: true,
  })
);

const headers = {
  "Content-Type": "application/json",
  Authorization: process.env.GITHUB_API_KEY,
};

const query_topics = {
  query: `
query {
  user(login: "katiechurchwell") {
    repositories(
      first: 100
      affiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER]
    ) {
      nodes {
        name
        repositoryTopics(first: 100) {
          nodes {
            topic {
              name
            }
          }
        }
      }
    }
  }
}
`,
};

app.get("/github", (req, res) => {
  const options = {
    url: "https://api.github.com/graphql",
    method: "post",
    data: query_topics,
    headers: headers,
  };

  axios
    .request(options)
    .then((response) => {
      // destructuring response
      const data = response.data;
      const reformattedData = data.data.user.repositories.nodes.map(
        ({ name, repositoryTopics }) => ({
          name: name,
          topics: repositoryTopics.nodes.map((value) => value.topic.name),
        })
      );
      // send it back
      res.json(reformattedData);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Serve up static assets
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(process.env.PORT || PORT, () => console.log(`Server is running on port ${PORT}`));
