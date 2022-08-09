function PopoverDesc(props) {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  const repos = props.repos;
  console.log(repos);
  const filter = repos.filter((repo) => repo.topics.includes(props.language));

  return (
    <ul>
      {filter.length ? (
        filter.map((item, index) => (
          <li key={index}>
            <a href={`https://www.github.com/katiechurchwell/${item.name}`}>
              {item.name}
            </a>
          </li>
        ))
      ) : (
        <li>No examples, sorry!</li>
      )}
    </ul>
  );
}

export default PopoverDesc;
