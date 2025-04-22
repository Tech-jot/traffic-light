import React, { useEffect, useState } from "react";
import "./trafficLight.css";

const TrafficLight = () => {
  const [active, setActive] = useState("green");
  const [timer, setTimer] = useState(120);

  const nextColor = {
    red: "yellow",
    yellow: "green",
    green: "red",
  };

  const handleClick = () => {
    setActive(nextColor[active]);
  };

  useEffect(() => {
    let interval;
    let timeout;

    interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    if (active == "green") {
      timeout = setTimeout(() => {
        setActive("red");
        setTimer(30);
      }, 120000); //2 minutes
    }
    if (active == "red") {
      timeout = setTimeout(() => {
        setActive("yellow");
        setTimer(10);
      }, 30000); //30 seconds
    }

    if (active == "yellow") {
      timeout = setTimeout(() => {
        setActive("green");
        setTimer(120);
      }, 10000); //10 seconds
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [active]);

  useEffect(() => {
    setTimer(timer + 1);
  }, []);

  return (
    <div className="traffic-container">
      <h1>{timer}</h1>
      <div className="traffic-box">
        <div className={`light red ${active === "red" ? "active" : ""}`}></div>
        <div
          className={`light yellow ${active === "yellow" ? "active" : ""}`}
        ></div>
        <div
          className={`light green ${active === "green" ? "active" : ""}`}
        ></div>
      </div>
      <button className="change-button" onClick={handleClick}>
        Change Light
      </button>
    </div>
  );
};

export default TrafficLight;
