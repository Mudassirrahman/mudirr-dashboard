import React, { useState } from "react";
import "./dashboard.css"


const timeLineBalls = (n, onClick, current) =>
  Array(n)
    .fill(0)
    .map((i, index) => (
        <div
          key={index}
          className={`timeline__ball ${current >= index ? "active" : null}`}
          onClick={() => onClick(index)}
        >
          {/* {index + 1} */}
        </div>
    ));

export default function TimeLine() {
  const [width, setWidth] = useState(0);
  // eslint-disable-next-line
  const [shouldIncrement, setShouldIncrement] = useState(1);
  const intermediaryBalls = 2;
  const calculatedWidth = (width / (intermediaryBalls + 1)) * 100;

  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="timeline w-75">
          <div
            className="timeline__progress"
            style={{ width: `${calculatedWidth}%` }}
          />
          {timeLineBalls(intermediaryBalls + 2, setWidth, width)}
        </div>
        <div>
          <h6
            style={{
              fontSize: "12px",
              fontFamily: "'Poppins', sans-serif",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "130%",
              color: "#707066",
            }}
          >
            {`${width * shouldIncrement + 1}/4`} Done
          </h6>
        </div>
      </div>
    </>
  );
}
