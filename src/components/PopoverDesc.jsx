function PopoverDesc(props) {
  const repos = props.repos;
  const filter = repos.filter((repo) => repo.topics.includes(props.language));

  return (
    <ul>
      {filter.map((item, index) => (
        <li key={index}>
          <a href={`https://www.github.com/katiechurchwell/${item.name}`}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default PopoverDesc;
