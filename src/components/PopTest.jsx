// Description in popover
function PopTest(props) {
  const repos = props.repos;
  const filter = repos.filter((repo) => repo.language === props.language);

  return (
    <>
      {filter.map((item, index) => (
        <ul>
          <li key={index}>
            <a href={item.homepage}>{item.name}</a>
          </li>
        </ul>
      ))}
    </>
  );
}

export default PopTest;
