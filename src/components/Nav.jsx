import Style from "./Nav.module.css";

function Nav({ data, onChangeMode }) {
  const listItem = data.map((work) => (
    <li
      key={work.id}
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
