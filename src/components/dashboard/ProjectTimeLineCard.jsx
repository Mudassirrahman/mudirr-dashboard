import React, { useContext } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import TimeLine from "./TimeLine";
import "./dashboard.css";
import { ProjectTimeLineCardData } from "./ProjectTimeLineCardData";
import { AppStateContext } from "../../store/aap-state-store";
import { Link } from "react-router-dom";


function ProjectTimeLineCard({  status, projectsCount }) {
  const { isOpen } = useContext(AppStateContext);
  const filteredData = status
    ? ProjectTimeLineCardData.filter((item) => item.status === status)
    : ProjectTimeLineCardData;

  return (
    <>
      <div className=" m-0 p-0 ">
        <div
          className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
          style={{ gap: "24px", flexWrap: "wrap" }}
        >
          {filteredData.map((item) => (
            <div
              className="card mb-2"
              style={{
                paddingLeft: "19px",
                paddingTop: "13px",
                paddingBottom: "26px",
                borderRadius: "0px",
                height: status !== "Completed" ? "268px" : "230px",
                width: isOpen ? "300px " : "380px",
                transition: ".5s ease-in",
                border: "0.5px solid #DADAD7",
                boxShadow: "0px 0px 4px rgba(164, 164, 164, 0.28)",
              }}
              key={item.id}
            >
              <div className="">
                <div className="d-flex justify-content-between">
                  <h3
                    className="heading"
                    style={{
                      width: isOpen ? "236px" : "316px",
                      transition: ".5s ease-in",
                      fontFamily: "Axiforma , sans-serif",
                    }}
                  >
                    {item.heading}
                  </h3>
                  <BiDotsVerticalRounded
                    style={{ fontSize: "25px", color: "#A1A19B" }}
                  />
                </div>
                <div>
                  {item.tags.map((tag) => (
                    <h4
                      className="m-0"
                      style={{
                        fontFamily: "Axiforma , sans-serif",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "12px",
                        lineHeight: "130%",
                        color: "#A1A19B",
                        cursor: "pointer",
                      }}
                      key={item.id}
                    >
                      {tag}
                    </h4>
                  ))}
                </div>
                <div className="" style={{ marginTop: "27px" }}>
                {status !== "Completed" &&  <TimeLine />}
                 
                </div>
                <div className="" style={{ marginTop: "17px" }}>
                  <h5
                    className="mb-0"
                    style={{
                      backgroundColor: "#ECEDF3",
                      borderRadius: "4px",
                      width: "76px",
                      // height: "16px",
                      fontFamily: "Axiforma , sans-serif",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "130%",
                      padding: "4px 8px",
                      color: "#55619C",
                    }}
                  >
                    {item.status}
                  </h5>
                  <h5
                    className="mb-0"
                    style={{
                      marginTop: "7px",
                      maxWidth: "170px",
                      borderRadius: "4px",
                      fontFamily: "Axiforma , sans-serif",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "130%",
                      backgroundColor: "#ECEDF3",
                      padding: "4px 8px",
                      color: "#55619C",
                    }}
                  >
                    {item.milestone}
                  </h5>
                </div>
                <div
                  className="d-flex justify-content-between"
                  style={{ marginTop: "10px" }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        lineHeight: "140%",
                        color: " #050504",
                        marginTop: "18px",
                        fontFamily: "Axiforma , sans-serif",
                      }}
                    >
                      {item.task}
                    </h3>
                  </div>
                  <div className="">
                    <Link to="/manage-project">
                      <button
                        className="btn btn-bg-light text-white projectCardButton"
                        style={{
                          background: "#55619C",
                          width: "40px",
                          height: "40px",
                        }}
                      >
                        <img
                          src="/cardBtn.png"
                          alt="button"
                          width={21}
                          height={18}
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectTimeLineCard;
