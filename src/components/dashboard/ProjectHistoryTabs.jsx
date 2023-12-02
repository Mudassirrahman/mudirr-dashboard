import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProjectTimeLineCard from "./ProjectTimeLineCard";
import "./dashboard.css"
function ProjectHistoryTabs ({isOpen, setIsOpen, toggle}) {
  return (
    <Tabs>
      <TabList style={{ marginTop: "67px", marginLeft: "25px" , display:"flex" ,  }}>
        <Tab className="timelineLink list-unstyled "
        >Ongoing</Tab>
        <Tab className="timelineLink list-unstyled">Completed</Tab>
        <Tab className="timelineLink list-unstyled">Cancelled</Tab>
        <Tab className="timelineLink list-unstyled">Drafts</Tab>
      
        <Tab className=" list-unstyled timelineLink2"
          style={{
            float:"right",
            width:"122px",
            fontStyle: "normal",
            fontWeight: " 500",
            fontSize: "16px",
            lineHeight: "148%",
            textDecoration: "underline",
            color: "#55619C",
            marginLeft: isOpen ? "460px" : "700px",
            transition: isOpen ? ".8s ease-in": ".8s ease-in",
          }}
        >
          See all projects
        </Tab>
      
      </TabList>

      <TabPanel style={{ marginTop: "32px", marginLeft: "35px" }}>
        <ProjectTimeLineCard  isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle}  />
      </TabPanel>
      <TabPanel style={{ marginTop: "32px", marginLeft: "35px" }}>
        <ProjectTimeLineCard  isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle}  />
      </TabPanel>
      <TabPanel style={{ marginTop: "32px", marginLeft: "35px" }}>
        <ProjectTimeLineCard  isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle}  />
      </TabPanel>
      <TabPanel style={{ marginTop: "32px", marginLeft: "35px" }}>
        <ProjectTimeLineCard  isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle}  />
      </TabPanel>
      <TabPanel style={{ marginTop: "32px", marginLeft: "35px" }}>
        <ProjectTimeLineCard  isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle}  />
      </TabPanel>
    </Tabs>
  );
}

export default ProjectHistoryTabs ;
