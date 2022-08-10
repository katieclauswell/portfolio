export default function restructureRepos(response) {
  const data = response.data;
  const reformattedData = data.data.user.repositories.nodes.map(
    ({ name, repositoryTopics }) => ({
      name: name,
      topics: repositoryTopics.nodes.map((value) => value.topic.name),
    })
  );
  return reformattedData;
}
