import React, { useContext } from "react";
import { AppStateContext } from "../../store/aap-state-store";
import "../dashboard/dashboard.css";

function Service() {
  const { isOpen } = useContext(AppStateContext);
  return (
    <div
      className="main position-absolute d-flex justify-content-center align-items-center  "
      style={{ left: isOpen ? "340px" : "98px", top: "25%",  transition: ".5s ease-in" }}
    >
     <h1 className=" text-center"> No Service Available Right Now</h1>
    </div>
  );
}

export default Service;
