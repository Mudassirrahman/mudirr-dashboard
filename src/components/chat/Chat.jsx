import React, { useContext } from "react";
import { AppStateContext } from "../../store/aap-state-store";
import "../dashboard/dashboard.css";
import Activity from "../manageProject/Activity";

function Chat() {
  const { isOpen } = useContext(AppStateContext);

  return (
    <div
      className="main position-absolute"
      style={{ left: isOpen ? "340px" : "98px", top: "10%", transition: ".5s ease-in", margin: "0 20px", height: "350px", width: "800px" }}
    >
   <Activity />
    </div>
  );
}

export default Chat;
