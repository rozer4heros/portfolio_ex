import Style from "./Nav.module.css";

function Nav({ id, data, onChangeMode }) {
  const listItem = data.map((work) => (
    <li
      key={work.id}
      className={`${Style.workItem} ${id === work.id ? Style.active : ""}`}
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
