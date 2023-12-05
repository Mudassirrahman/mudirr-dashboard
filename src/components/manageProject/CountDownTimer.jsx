import React, { useEffect, useState } from "react";
import moment from "moment";

function CountDownTimer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showSemicolon, setShowSemicolon] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const now = moment();
      const then = moment("2020-10-15 12:12:12", "YYYY-MM-DD hh:mm:ss");
      const countdown = moment(then - now);
      setDays(countdown.format("D"));
      setHours(countdown.format("HH"));
      setMinutes(countdown.format("mm"));
      setSeconds(countdown.format("ss"));
    }, 1000);
  }, []);

  return (
    <div className="container card p-3">
    <div style={{  borderBottom: "1px solid  #DADAD7",}}>
      <h1
        className="text-center"
        style={{
          width: "228px",
          height: "24px",
          fontFamily: "'poppins' ,sans-serif",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "18px",
          lineHeight: "135%",
          color: " #050504",
        
        }}
      >
        Time Left to Deliver
      </h1>
      </div>
      <div className="col-3 d-flex" style={{marginLeft:"67px"}}>
        <div className="" style={{ width: "82px" }}>
          <p
            style={{
              width: "30px",
              height: "34px",
              fontFamily: "'poppins' ,sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "140%",
              letterSpacing: "-0.02em",
              color: "#050504",
            }}
          >
            {days}
          </p>
          <p
            style={{
              marginLeft: "0%",
              width: "45px",
              height: "16px",
              fontFamily: "'poppins' ,sans-serif",
              fontStyle: "normal",
              fontWeight: " 400",
              fontSize: " 12px",
              lineHeight: "130%",
              color: " #707066",
            }}
          >
            days
          </p>
        </div>
        {showSemicolon ? <div className="semicolon">:</div> : null}
        <div className="" style={{ width: "82px" }}>
          <p
            style={{
              width: "30px",
              height: "34px",
              fontFamily: "'poppins' ,sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "140%",
              letterSpacing: "-0.02em",
              color: "#050504",
            }}
          >
            {" "}
            {hours}{" "}
          </p>
          <p
            style={{
              marginLeft: "0%",
              width: "45px",
              height: "16px",
              fontFamily: "'poppins' ,sans-serif",
              fontStyle: "normal",
              fontWeight: " 400",
              fontSize: " 12px",
              lineHeight: "130%",
              color: " #707066",
            }}
          >
            hour
          </p>
        </div>
        {showSemicolon ? <div className="semicolon">:</div> : null}
        <div className="" style={{ width: "82px" }}>
          <p
            style={{
              width: "30px",
              height: "34px",
              fontFamily: "'poppins' ,sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "140%",
              letterSpacing: "-0.02em",
              color: "#050504",
            }}
          >
            {" "}
            {minutes}{" "}
          </p>
          <p
            style={{
              marginLeft: "0%",
              width: "45px",
              height: "16px",
              fontFamily: "'poppins' ,sans-serif",
              fontStyle: "normal",
              fontWeight: " 400",
              fontSize: " 12px",
              lineHeight: "130%",
              color: " #707066",
            }}
          >
            minute
          </p>
        </div>
        {showSemicolon ? <div className="semicolon">:</div> : null}
        <div className="" style={{ width: "82px" }}>
          <p
            style={{
              width: "30px",
              height: "34px",
              fontFamily: "'poppins' ,sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "140%",
              letterSpacing: "-0.02em",
              color: "#050504",
            }}
          >
            {seconds}{" "}
          </p>
          <p
            style={{
              marginLeft: "0%",
              width: "45px",
              height: "16px",
              fontFamily: "'poppins' ,sans-serif",
              fontStyle: "normal",
              fontWeight: " 400",
              fontSize: " 12px",
              lineHeight: "130%",
              color: " #707066",
            }}
          >
            second
          </p>
        </div>
      </div>
      <button className="btn btn-outline-light" style={{color: "#55619C" , border: "1px solid #55619C"}}>Request Report</button>
    </div>
  );
}
export default CountDownTimer;
