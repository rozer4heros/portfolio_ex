import "./Nav.css";

function Nav({ id, data, onChangeMode }) {
  const listItem = data.map((work) => (
    <li
      key={work.id}
      className={id === work.id ? "active" : ""}
      onClick={(e) => {
        e.preventDefault();
        onChangeMode(work.id);
      }}
    >
      <button type="button">{work.title}</button>
    </li>
  ));

  return (
    <nav>
      <ul>{listItem}</ul>
    </nav>
  );
}

export default Nav;
