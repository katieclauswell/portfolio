import { gql } from "@apollo/client";

export const GET_TOPICS = gql`
  {
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
`;
