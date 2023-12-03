import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState("Dashboard")
  const toggle = () => setIsOpen(!isOpen);

  const handleSelectedTab = (tabName) => {
    setSelectedTab(tabName)
  }
  return (
    <div className="App">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} selectedTab={selectedTab} setSelectedTab={setSelectedTab} handleSelectedTab={handleSelectedTab} />
      {selectedTab === "Dashboard" && <Dashboard isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle}  />}
      
    </div>
  );
}

export default App;
