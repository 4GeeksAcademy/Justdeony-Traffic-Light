import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Circle from "./redCircle";

//create your first component
const Home = () => {
  const [color, setColor] = useState("red");

  return (
    <div className="d-flex justify-content-center align-items-center full-height">
      <div
        className="card mx-auto text-center"
        style={{
          width: "20rem",
          height: "40rem",
          backgroundColor: "black",
          fontWeight: "bold",
          color: "yellow",
          boxShadow: "0 0 40px rgba(0, 0, 0, 1)",
        }}
      >
        <div className="card-body">
          <h2 className="card-title"></h2>
          <Circle
            background="red"
            active={color === "red"}
            onClick={() => setColor((prev) => (prev === "red" ? null : "red"))}
          />
          <Circle
            background="yellow"
            active={color === "yellow"}
            onClick={() =>setColor((prev) => (prev === "green" ? null : "green"))}
          />
          <Circle
            background="green"
            active={color === "green"}
            onClick={() =>
              setColor((prev) => (prev === "green" ? null : "green"))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
