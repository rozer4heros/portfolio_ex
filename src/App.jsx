import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Figure from "./components/Figure.jsx";
import Controls from "./components/Controls.jsx";
// import Prev from "./assets/left.png";
// import Next from "./assets/right.png";

function App() {
  const works = [
    { id: "a", title: "Work 1", url: "/images/img-1.jpg", desc: "Work 1 description" },
    { id: "b", title: "Work 2", url: "/images/img-2.jpg", desc: "Work 2 description" },
    { id: "c", title: "Work 3", url: "/images/img-3.jpg", desc: "Work 3 description" },
    { id: "d", title: "Work 4", url: "/images/img-4.jpg", desc: "Work 4 description" },
    { id: "e", title: "Work 5", url: "/images/img-mary-1.jpg", desc: "Work 5 description" },
    { id: "f", title: "Work 6", url: "/images/img-mary-2.jpg", desc: "Work 6 description" },
    { id: "g", title: "Work 7", url: "/images/img-aris-yuuka.jpg", desc: "Work 7 description" },
    { id: "h", title: "Work 8", url: "/images/img-eve.png", desc: "Work 8 description" },
    { id: "i", title: "Work 9", url: "/images/img-kanna-1.jpg", desc: "Work 9 description" },
    { id: "j", title: "Work 10", url: "/images/img-kanna-2.jpg", desc: "Work 10 description" },
    { id: "k", title: "Work 11", url: "/images/img-cvwo.jpg", desc: "Work 11 description" },
    { id: "l", title: "Work 12", url: "/images/img-music-girl-itou.jpg", desc: "Work 12 description" },
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
      <Nav id={id} data={works} onChangeMode={(id) => setId(id)} />
      <Figure data={works.find((w) => w.id === id)} />
      <Controls onClickPrev={handlePrev} onClickNext={handleNext} />
    </>
  );
}

export default App;
