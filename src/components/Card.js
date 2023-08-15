import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Card = ({ data, index, setIndex }) => {
  function rightHandler() {
    if (index + 1 >= data.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function leftHandler() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(data.length - 1);
    }
  }

  function generateRandomInteger(min, max) {
    let number = Math.floor(Math.random() * (max - min)) + min;
    console.log(number);
    return number;
  }

  function surpriseHandler() {
    setIndex(generateRandomInteger(0, data.length));
  }

  return (
    <div className="card">
      <div className="img-div">
        <img src={data[index].img} alt="img" />
        <div className="inner-img-div"></div>
      </div>
      <div>
        <p className="info-name">{data[index].name}</p>
      </div>
      <div>
        <p className="info-role">{data[index].role}</p>
      </div>
      <div>
        <FaQuoteLeft color="rgb(186, 112, 255)" />
      </div>
      <div>
        <p className="info-desc">{data[index].desc}</p>
      </div>
      <div>
        <FaQuoteRight color="rgb(186, 112, 255)" />
      </div>
      <div className="left-right-btn-div">
        <button onClick={leftHandler}>
          <FiChevronLeft fontSize="1.55rem" />
        </button>
        <button onClick={rightHandler}>
          <FiChevronRight fontSize="1.55rem" />
        </button>
      </div>
      <div>
        <button onClick={surpriseHandler} className="surprise-btn">
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Card;
