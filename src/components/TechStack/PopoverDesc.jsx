import React from "react";

function PopoverDesc({ filter, name }) {
  const repos = filter(name);

  return (
    <>
      {repos.length ? (
        repos.map((item, index) => (
          <li key={index}>
            <a
              href={`https://www.github.com/katieclauswell/${item.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-link"
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
