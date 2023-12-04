import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Activity from "./Activity";
import Detail from "./Detail";
import Milestones from "./Milestones";

function ProjectControllerTabs() {
  return (
    <Tabs>
      <TabList>
        <Tab>Activity</Tab>
        <Tab>Details</Tab>
        <Tab>Milestones</Tab>
      </TabList>

      <TabPanel>
        <Activity />
      </TabPanel>
      <TabPanel>
        <Detail />
      </TabPanel>
      <TabPanel>
        <Milestones />
      </TabPanel>
    </Tabs>
  );
}

export default ProjectControllerTabs;
