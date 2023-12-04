import { createContext, useState } from "react";
export const AppStateContext = createContext();

const AppStateProvider = (props) => {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedTab, setSelectedTab] = useState("Dashboard");
    const toggle = () => setIsOpen(!isOpen);
  
    const handleSelectedTab = (tabName) => {
      setSelectedTab(tabName);
    };
   
    return (
        <AppStateContext.Provider
            value={{ isOpen, setIsOpen, selectedTab, setSelectedTab, toggle, handleSelectedTab }}
        >
            {props.children}
        </AppStateContext.Provider>
    );
};
export default AppStateProvider;