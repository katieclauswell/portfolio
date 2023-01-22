function PopoverDesc({ filter, name }) {
  const repos = filter(name);

  return (
    <>
      {repos.length ? (
        repos.map((item, index) => (
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
        <>No examples, sorry!</>
      )}
    </>
  );
}

export default PopoverDesc;
