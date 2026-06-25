import Style from "./Nav.module.css";

function Nav({ data, onChangeMode }) {
  const listItem = data.map((work) => (
    <li
      key={work.id}
      className={Style.workItem}
      onClick={(e) => {
        e.preventDefault();
        onChangeMode(work.id);
      }}
    >
      <button type="button" className={Style.workBtn}>
        {work.title}
      </button>
    </li>
  ));

  return (
    <nav>
      <ul className={Style.workList}>{listItem}</ul>
    </nav>
  );
}

export default Nav;
