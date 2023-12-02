import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="App">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />
    </div>
  );
}

export default App;
