import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="App">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />
      <Dashboard isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle}  />
    </div>
  );
}

export default App;
