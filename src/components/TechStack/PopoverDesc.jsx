function PopoverDesc(props) {
  const repos = props.info;
  const filter = repos.filter((repo) => repo.topics.includes(props.language));

  return (
    <ul>
      {filter.length ? (
        filter.map((item, index) => (
          <li key={index}>
            <a
              href={`https://www.github.com/katiechurchwell/${item.name}`}
              target="_blank"
            >
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
