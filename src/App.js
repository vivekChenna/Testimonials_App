import { useState } from "react";
import "./App.css";
import Testimonial from "./components/Testimonial";
import data from "./constants/data";

function App() {
  const [index, setIndex] = useState(0);
  return (
    <div className="App">
      <div className="inner-div">
        <p className="heading">Our Testimonials</p>
        <div className="underline-div"></div>
        <Testimonial data={data} index={index} setIndex={setIndex} />
      </div>
    </div>
  );
}

export default App;
