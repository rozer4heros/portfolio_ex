function Nav({ data, onChangeMode }) {
  const listItem = data.map((work) => (
    <li
      key={work.id}
      onClick={(e) => {
        e.preventDefault();
        onChangeMode(work.id);
      }}
    >
      <a href="">{work.title}</a>
    </li>
  ));

  return (
    <nav>
      <ul>{listItem}</ul>
    </nav>
  );
}

export default Nav;
