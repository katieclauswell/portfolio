const PORT = 8000;
const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const cors = require("cors");
const axios = require("axios");
require('dotenv').config()

const app = express();
app.use(cors());

app.use(
  "https://api.github.com/graphql",
  expressGraphQL({
    graphiql: true,
  })
);

//need to sub .env
const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + process.env.REACT_APP_API_KEY,
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

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
