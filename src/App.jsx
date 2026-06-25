import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Figure from "./components/Figure.jsx";

function App() {
  const [id, setId] = useState(1);

  const works = [
    { id: 1, title: "Work 1", url: "", desc: "Work 1 description" },
    { id: 2, title: "Work 2", url: "", desc: "Work 2 description" },
    { id: 3, title: "Work 3", url: "", desc: "Work 3 description" },
    { id: 4, title: "Work 4", url: "", desc: "Work 4 description" },
  ];

  return (
    <>
      <Header />
      <Nav data={works} onChangeMode={(id) => setId(id)} />
      <Figure data={works.find((w) => w.id === id)} />
    </>
  );
}

export default App;
