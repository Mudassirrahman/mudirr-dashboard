import { useContext, useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import { Outlet } from "react-router-dom";
import { AppStateContext } from "./store/aap-state-store";

function App() {
  const {
    isOpen,
    setIsOpen,
    selectedTab,
    setSelectedTab,
    toggle,
    handleSelectedTab,
  } = useContext(AppStateContext);
  return (
    <div className="App">
      <Sidebar />
      <Outlet />
      {/* {selectedTab === "Dashboard" && <Dashboard isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle}  />} */}
    </div>
  );
}

export default App;
