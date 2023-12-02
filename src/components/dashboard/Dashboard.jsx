import React from "react";
import { FaShapes } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import ProjectHistoryTabs from "./ProjectHistoryTabs";
import "./dashboard.css"

function Dashboard({ isOpen, setIsOpen, toggle }) {
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <MdDashboard />,
    },
    {
      path: "/about",
      name: "Chat",
      icon: <BsChatLeftText />,
    },
    {
      path: "/analytics",
      name: "Services",
      icon: <FaShapes />,
    },
    {
      path: "/comment",
      name: "Add",
      icon: <IoIosAddCircleOutline />,
    },
  ];

  return (
    <>

      {/* dashbord content */}

      <div
        className="main position-absolute top-0  "
        style={{ left: isOpen ? "340px" : "98px",
        transition: ".5s ease-in"
         }}
      >
        {/* title and heading */}

        <h1
          className="mb-0"
          style={{
            width: "632px",
            height: "38px",
            marginTop: "56px",
            marginLeft: "25px",
            fontFamily: "Axiforma , sans-serif",
            fontWeight: "700",
            fontSize: "28px",
            lineHeight: "135%",
            color: "#050504",
          }}
        >
          Welcome Back, Mudassir!
        </h1>
        <p
          className="mb-0"
          style={{
            width: "632px",
            marginLeft: "25px",
            marginTop: "8px",
            fontFamily: "Axiforma , sans-serif",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "148%",
            color: "#707066",
          }}
        >
          You have accomplished a lot today. Let us handle the rest.
        </p>

        {/* folder tracking */}

        <div
          className="d-flex "
          style={{
            marginLeft: "25px",
            gap: isOpen ? "52px" : "92px",
            transition: isOpen ? " .8s ease-in" : ".8s ease-in",
            marginTop: "32px",
          }}
        >
          <div className="d-flex gap-2">
            <div>
              <img
                src="/FolderGreen.png"
                width={40}
                height={40}
                alt="folderimg"
              />
            </div>
            <div>
              <h3
                style={{
                  fontSize: "16px",
                  color: " #050504",
                  lineHeight: "130%",
                  fontfamily: "Axiforma , sans-serif",
                  fontStyle: "normal",
                  fontWeight: "600",
                }}
              >
                30
              </h3>
              <h4
                style={{
                  fontSize: "12px",
                  color: "#707066",
                  lineHeight: "130%",
                  fontfamily: "Axiforma , sans-serif",
                  fontStyle: "normal",
                  fontWeight: "400",
                }}
              >
                Completed
              </h4>
            </div>
          </div>

          <div className="d-flex gap-2">
            <div>
              <img
                src="/FolderBlue.png"
                width={40}
                height={40}
                alt="folderimg"
              />
            </div>
            <div>
              <h3
                style={{
                  fontSize: "16px",
                  color: " #050504",
                  lineHeight: "130%",
                  fontfamily: "Axiforma , sans-serif",
                  fontStyle: "normal",
                  fontWeight: "600",
                }}
              >
                2
              </h3>
              <h4
                style={{
                  fontSize: "12px",
                  color: "#707066",
                  lineHeight: "130%",
                  fontfamily: "Axiforma , sans-serif",
                  fontStyle: "normal",
                  fontWeight: "400",
                }}
              >
                Ongoing
              </h4>
            </div>
          </div>

          <div className="d-flex gap-2">
            <div>
              <img
                src="/FolderBrown.png"
                width={40}
                height={40}
                alt="folderimg"
              />
            </div>
            <div>
              <h3
                style={{
                  fontSize: "16px",
                  color: " #050504",
                  lineHeight: "130%",
                  fontfamily: "Axiforma , sans-serif",
                  fontStyle: "normal",
                  fontWeight: "600",
                }}
              >
                4
              </h3>
              <h4
                style={{
                  fontSize: "12px",
                  color: "#707066",
                  lineHeight: "130%",
                  fontfamily: "Axiforma , sans-serif",
                  fontStyle: "normal",
                  fontWeight: "400",
                }}
              >
                Drafts
              </h4>
            </div>
          </div>

          <div className="d-flex gap-2">
            <div>
              <img
                src="/FolderRed.png"
                width={40}
                height={40}
                alt="folderimg"
              />
            </div>
            <div>
              <h3
                style={{
                  fontSize: "16px",
                  color: " #050504",
                  lineHeight: "130%",
                  fontfamily: "Axiforma , sans-serif",
                  fontStyle: "normal",
                  fontWeight: "600",
                }}
              >
                02
              </h3>
              <h4
                style={{
                  fontSize: "12px",
                  color: "#707066",
                  lineHeight: "130%",
                  fontfamily: "Axiforma , sans-serif",
                  fontStyle: "normal",
                  fontWeight: "400",
                }}
              >
                Cancelled
              </h4>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            width: isOpen ? "964px" : "1204px",
            transition: ".8s ease-in",
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
