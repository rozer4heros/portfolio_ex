import Style from "./Figure.module.css";

function Figure({ data }) {
  const { title, url, desc } = data ?? { title: "", url: "", desc: "Data not found" };

  return (
    <figure>
      <img alt={title} src={url} />
      <figcaption>{desc}</figcaption>
    </figure>
  );
}

export default Figure;
