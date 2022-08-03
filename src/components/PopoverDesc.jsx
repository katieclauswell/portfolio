function PopoverDesc(props) {
  const repos = props.repos;
  console.log("repos", repos)
  console.log("language", props.language)
  const filter = repos.filter(repo => repo.topics.includes(props.language));
  console.log("filter", filter);

  return (
    <>
      {filter.map((item, index) => (
        <ul>
          <li key={index}>
            {item.name}
          </li>
        </ul>
      ))}
    </>
  );
}

export default PopoverDesc;
