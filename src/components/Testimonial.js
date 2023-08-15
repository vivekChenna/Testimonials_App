import React from "react";
import Card from "./Card";

const Testimonial = ({ data, index, setIndex }) => {
  return (
    <div className="Testimonial">
      <Card data={data} index={index} setIndex={setIndex} />
    </div>
  );
};

export default Testimonial;
