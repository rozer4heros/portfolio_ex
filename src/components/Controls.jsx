import Prev from "../assets/left.png";
import Next from "../assets/right.png";

function Controls({ onClickPrev, onClickNext }) {
  return (
    <>
      <button onClick={onClickPrev}>
        <img src={Prev} alt="이전" />
      </button>
      <button onClick={onClickNext}>
        <img src={Next} alt="다음" />
      </button>
    </>
  );
}
export default Controls;
