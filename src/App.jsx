import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Figure from "./components/Figure.jsx";
import Prev from "./assets/left.png";
import Next from "./assets/right.png";

function App() {
  const works = [
    { id: "a", title: "Work 1", url: "assets/img-1.jpg", desc: "Work 1 description" },
    { id: "b", title: "Work 2", url: "assets/img-2.jpg", desc: "Work 2 description" },
    { id: "c", title: "Work 3", url: "assets/img-3.jpg", desc: "Work 3 description" },
    { id: "d", title: "Work 4", url: "assets/img-4.jpg", desc: "Work 4 description" },
    { id: "e", title: "Work 5", url: "/", desc: "Work 5 description" },
    { id: "f", title: "Work 6", url: "/", desc: "Work 6 description" },
    { id: "g", title: "Work 7", url: "/", desc: "Work 7 description" },
    { id: "h", title: "Work 8", url: "/", desc: "Work 8 description" },
    { id: "i", title: "Work 9", url: "/", desc: "Work 9 description" },
    { id: "j", title: "Work 10", url: "/", desc: "Work 10 description" },
    { id: "k", title: "Work 11", url: "/", desc: "Work 11 description" },
    { id: "l", title: "Work 12", url: "/", desc: "Work 12 description" },
  ];

  const [id, setId] = useState(works[0].id);

  const handlePrev = () => {
    const currentIndex = works.findIndex((w) => w.id === id);
    if (currentIndex <= 0) {
      setId(works[works.length - 1].id); // 처음이면 마지막으로
    } else {
      setId(works[currentIndex - 1].id);
    }
  };
  const handleNext = () => {
    const currentIndex = works.findIndex((w) => w.id === id);
    if (currentIndex >= works.length - 1) {
      setId(works[0].id); // 마지막이면 처음으로
    } else {
      setId(works[currentIndex + 1].id);
    }
  };

  return (
    <>
      <Header />
      <Nav data={works} onChangeMode={(id) => setId(id)} />
      <Figure data={works.find((w) => w.id === id)} />
      <button onClick={handlePrev}>
        <img src={Prev} alt="이전" />
      </button>
      <button onClick={handleNext}>
        <img src={Next} alt="다음" />
      </button>
    </>
  );
}

export default App;
