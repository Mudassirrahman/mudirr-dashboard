import React, { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProjectTimeLineCard from "./ProjectTimeLineCard";
import "./dashboard.css"
import { AppStateContext } from "../../store/aap-state-store";
function ProjectHistoryTabs ({projectsCount}) {
  const { isOpen } = useContext(AppStateContext);
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
            marginLeft: isOpen ? "460px" : "700px",
          }}
        >
          See all projects
        </Tab>
      
      </TabList>

      <TabPanel style={{ marginTop: "32px", marginLeft: "35px" }}>
        <ProjectTimeLineCard  projectsCount={projectsCount}  status="Ongoing"  />
      </TabPanel>
      <TabPanel style={{ marginTop: "32px", marginLeft: "35px" }}>
        <ProjectTimeLineCard  projectsCount={projectsCount}   status="Completed" />
      </TabPanel>
      <TabPanel style={{ marginTop: "32px", marginLeft: "35px" }}>
        <ProjectTimeLineCard  projectsCount={projectsCount}   status="Cancelled" />
      </TabPanel>
      <TabPanel style={{ marginTop: "32px", marginLeft: "35px" }}>
        <ProjectTimeLineCard  projectsCount={projectsCount}   status="Drafts" />
      </TabPanel>
      <TabPanel style={{ marginTop: "32px", marginLeft: "35px" }}>
        <ProjectTimeLineCard   />
      </TabPanel>
    </Tabs>
  );
}

export default ProjectHistoryTabs ;
