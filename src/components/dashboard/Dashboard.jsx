import React from "react";
import ProjectHistoryTabs from "./ProjectHistoryTabs";
import "./dashboard.css";

const projectsTrackeingDisplayData = [
  {
    id: "1",
    imgUrl: "/FolderGreen.png",
    projectCounter: "30",
    projectRemark: "Completed",
    alt: "folder icon",
  },
  {
    id: "2",
    imgUrl: "/FolderBlue.png",
    projectCounter: "12",
    projectRemark: "Ongoing",
    alt: "folder icon",
  },
  {
    id: "3",
    imgUrl: "/FolderBrown.png",
    projectCounter: "20",
    projectRemark: "Drafts",
    alt: "folder icon",
  },
  {
    id: "4",
    imgUrl: "/FolderRed.png",
    projectCounter: "02",
    projectRemark: "Cancelled",
    alt: "folder icon",
  },
];

function Dashboard({ isOpen, setIsOpen, toggle }) {
  return (
    <>
      {/* dashbord content */}

      <div
        className="main position-absolute top-0  "
        style={{ left: isOpen ? "340px" : "98px", transition: ".5s ease-in" }}
      >
        {/* title and heading */}

        <h1 className="mb-0 dashboardWelcomeHeading">
          Welcome Back, Mudassir!
        </h1>
        <p className="mb-0 descriptionWelcomeNote">
          You have accomplished a lot today. Let us handle the rest.
        </p>

        {/* folder tracking */}

        <div
          className="d-flex "
          style={{
            marginLeft: "25px",
            gap: isOpen ? "52px" : "92px",
            transition:".5s ease-in",
            marginTop: "32px",
          }}
        >
          {projectsTrackeingDisplayData.map((props) => (
            <div className="d-flex gap-2">
              <div>
                <img
                  src={props.imgUrl}
                  width={40}
                  height={40}
                  alt={props.alt}
                />
              </div>
              <div>
                <h3 className="projectCounter">{props.projectCounter}</h3>
                <h4 className="projectRemark">{props.projectRemark}</h4>
              </div>
            </div>
          ))}
        </div>
        <div
          className=""
          style={{
            width: isOpen ? "964px" : "1204px",
            transition: ".5s ease-in",
          }}
        >
          <ProjectHistoryTabs
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            toggle={toggle}
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
