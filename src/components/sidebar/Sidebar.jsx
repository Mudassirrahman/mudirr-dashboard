import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { AiOutlineSearch } from "react-icons/ai";
import "./sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const [isCollapsed, setIsCollapsed] = useState();
  const [isCollapsed1, setIsCollapsed1] = useState();

  return (
    <>
      <div className=" p-0 m-0  ">
        <div style={{ width: isOpen ? "332px" : "88px" }} className="sidebar">
          <img
            className="logo-singl"
            src="/Path2616.png"
            alt="logo"
            style={{ display: isOpen ? "none" : "block" }}
          />
          <div className="logo-group-div">
            <img
              className="logo-group"
              src="/Group1409.png"
              alt="logo"
              style={{ display: isOpen ? "block" : "none" }}
            />
            <img
              src="/dubblearow.png"
              alt="arrow icon"
              className="rounded-circle bars"
              style={{
                marginLeft: isOpen ? "317px" : "73px",
                transform: isOpen ? "  rotate(0deg)" : " rotate(-180deg)",
              }}
              onClick={toggle}
            />
          </div>
          <div
            className="dropdown"
            style={{
              marginTop: "12px",
              marginLeft: "24px",
              transition: ".5s ease-in",
            }}
          >
            <a
              href="#"
              className="d-flex  link-dark text-decoration-none "
              id="dropdownUser2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                style={{
                  marginTop: "10px",
                }}
                src="/DP.png"
                alt="dm img"
                width="40"
                height="40"
                className="rounded-circle me-2"
              />

              <strong
                className="dropdown-toggle acc-dropdown"
                style={{ visibility: isOpen ? "visible " : "hidden" }}
              >
                Customer@email.com
              </strong>
            </a>

            <ul
              className="dropdown-menu text-small shadow"
              aria-labelledby="dropdownUser2"
            >
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>

            <p
              className="acc-holder-name"
              style={{ visibility: isOpen ? "visible " : "hidden" }}
            >
              Jane Doe
            </p>
          </div>
          <div className="search-section">
            <input
              className="search-input"
              type="text"
              placeholder="Search projects, people... "
              style={{
                height: isOpen ? "40px" : "20",
                opacity: isOpen ? "1 " : "0",
              }}
            />
            <AiOutlineSearch
              className="sarch-icon"
              style={{ left: isOpen ? "270.42px" : "35.4px" }}
            />
          </div>
          <div>
            <ul
              className="p-0  mb-0"
              style={{
                marginTop: "10px",
                transition: ".5s ease-in",
              }}
            >
              <li className="link" style={{background: "#ECEDF3"}}>
                <div className="icon">
                  <img
                    src="/icon/dashbord.png"
                    alt="dashboard icon"
                    width="17"
                    height="17"
                  />
                </div>
                <div className="link_text">Dashboard</div>
              </li>

              <li className="link">
                <div className="icon">
                  <img
                    src="/icon/chat.png"
                    alt="dashboard icon"
                    width="19"
                    height="19"
                  />
                </div>

                <div className="link_text">Chat</div>
              </li>

              <li className="link">
                <div className="icon">
                  <img
                    src="/icon/service.png"
                    alt="dashboard icon"
                    width="19"
                    height="19"
                  />
                </div>

                <div className="link_text">Services</div>
              </li>

              <li className="link">
                <div className="icon">
                  <img
                    src="/icon/add.png"
                    alt="dashboard icon"
                    width="19"
                    height="19"
                  />
                </div>

                <div className="link_text">Add</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

{
  /* <hr
            className=""
            style={{
              margin: "22px auto 0",
              width: isOpen ? "90%" : "75%",
            }}
          /> */
}
{
  /* <div>
            <span
              // style={{ display: isOpen ? "block" : "none", marginLeft: "32px" }}
              style={{
                visibility: isOpen ? "visible" : "hidden",
                transition: isOpen ? ".7s ease-in" : ".7s ease-in",
                // display: isOpen ? "block" : "none",
                // visibility: isOpen ? "1" : "0",
                marginLeft: "32px",
                marginTop: "17px",
                fontFamily: "Axiforma , sans-serif",
                fontWeight: "600",
                // transition: isOpen ?".8s ease-in" : ".8s ease-in",
              }}
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              Account
            </span>
            <div
              className="collapse-content"
              style={{
                display: isCollapsed && isOpen ? "none" : "block",
                // marginTop: "6px",
                // transition: isOpen ? " .6s ease-in" : ".8s ease-in",
                marginTop: isOpen ? "6px" : "-33px",
                transition: isOpen ? " ease-in .6s" : ".8s ease-in",
              }}
              aria-expanded={isCollapsed}
            >
              <ul
                className="p-0  dropdown1trans"
                style={{
                  overflow:"hidden",
                  marginLeft: "18.25px",
                  top: isOpen ? "443px " : "385px",
                  transition: isOpen ? ".8s ease-in" : ".8s ease-in",
                  // transition: isOpen ? "all .7s" : ".5s"
                }}
              >
                <li
                  className="list-unstyled link-collaps"
                  style={{
                    paddingLeft: "16px",
                    marginRight: "16.5px",
                    borderRadius: "4px",
                    marginTop: "18px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <img
                    src="/icon/alert.png"
                    alt="dashboard icon"
                    width="16"
                    height="20"
                    className="icon"
                    // style={{ marginTop: isOpen ? "26px" : "21px" }}
                  />
                  <CSSTransition
                    in={isOpen}
                    timeout={800}
                    classNames={"fade"}
                    unmountOnExit
                  >
                    <a
                      className="text-decoration-none link_text"
                      href="#"
                      style={{
                        overflow: "hidden",
                        fontFamily: "Axiforma , sans-serif",
                        fontWeight: "400",
                        // marginTop: isOpen ? "26px" : "21px"
                      }}
                    >
                      Notification
                    </a>
                  </CSSTransition>
                </li>
                <li
                  className="list-unstyled d-flex  link-collaps"
                  style={{
                    paddingLeft: "16px",
                    marginRight: "16.5px",
                    borderRadius: "4px",
                    marginTop: "8px",
                    paddingTop: "px",
                    paddingBottom: "5px",
                    // overflow:"hidden",
                    
                  }}
                >
                  <img
                    src="/icon/shudailMeeting.png"
                    alt="dashboard icon"
                    width="17"
                    height="17"
                    className="icon"
                    // style={{ marginTop: isOpen ? "21px" : "21px" }}
                  />
                  <CSSTransition
                    in={isOpen}
                    timeout={800}
                    classNames={"fade"}
                    unmountOnExit
                  >
                    <a
                      className="text-decoration-none link_text"
                      href="#"
                      style={{
                        overflow: "hidden",
                        fontFamily: "Axiforma , sans-serif",
                        fontWeight: "400",
                        // marginTop: isOpen ? "21px" : "21px",
                      }}
                    >
                      Schedule a 30 min meeting
                    </a>
                  </CSSTransition>
                </li>
                <li
                  className="list-unstyled  link-collaps"
                  style={{
                    paddingLeft: "16px",
                    marginRight: "16.5px",
                    borderRadius: "4px",
                    marginTop: "5px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <img
                    src="/icon/setting.png"
                    alt="dashboard icon"
                    width="19"
                    height="19"
                    className="icon"
                    // style={{ marginTop: isOpen ? "21px" : "21px" }}
                  />
                  <CSSTransition
                    in={isOpen}
                    timeout={800}
                    classNames={"fade"}
                    unmountOnExit
                  >
                    <a
                      className="text-decoration-none link_text"
                      href="#"
                      style={{
                        overflow: "hidden",
                        fontFamily: "Axiforma , sans-serif",
                        fontWeight: "400",
                        marginTop: isOpen ? "21px" : "21px",
                      }}
                    >
                      Setting
                    </a>
                  </CSSTransition>
                </li>
              </ul>
            </div>
          </div> */
}

{
  /* <hr
            style={{
              margin: "22px auto 0",
              width: isOpen ? "90%" : "75%",
            }}
          /> */
}
{
  /* 
          <div>
            <span
              // style={{ display: isOpen ? "block" : "none", marginLeft: "32px" }}
              style={{
                visibility: isOpen ? "visible" : "hidden",
                transition: isOpen ? ".7s ease-in" : ".7s ease-in",
                // display: isOpen ? "block" : "none",
                // visibility: isOpen ? "1" : "0",
                marginLeft: "32px",
                marginTop: "26px",
                fontFamily: "Axiforma , sans-serif",
                fontWeight: "600",
                // transition: isOpen ?".8s ease-in" : ".8s ease-in",
              }}
              onClick={() => setIsCollapsed1(!isCollapsed1)}
            >
              Upcoming
            </span>
            <div
              className="collapse-content"
              style={{
                display: isCollapsed1 && isOpen ? "none" : "block",
                // marginTop: "6px",
                // transition: isOpen ? " .6s ease-in" : ".8s ease-in",
                marginTop: isOpen ? "6px" : "-33px",
                transition: isOpen ? " ease-in .6s" : ".8s ease-in",
              }}
              aria-expanded={isCollapsed1}
            >
              <ul
                className="p-0 "
                style={{
                  marginLeft: "18.25px",
                  top: isOpen ? "443px" : "385px",
                }}
              >
                <li
                  className="list-unstyled  link-collaps"
                  style={{
                    paddingLeft: "16px",
                    marginRight: "16.5px",
                    borderRadius: "4px",
                    marginTop: isOpen ? "18px" : "10px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <img
                    src="/icon/finance.png"
                    alt="dashboard icon"
                    width="21"
                    height="15"
                    className="icon"
                    // style={{ marginTop: isOpen ? "21px" : "28px" }}
                  />
                  <CSSTransition
                    in={isOpen}
                    timeout={800}
                    classNames={"fade"}
                    unmountOnExit
                  >
                    <a
                      className="text-decoration-none link_text"
                      href="#"
                      style={{
                        // display: isOpen ? "block " : "none",
                        transition: isOpen ? ".8s ease-in" : ".8s ease-in",
                        fontFamily: "Axiforma , sans-serif",
                        fontWeight: "400",
                        marginTop: isOpen ? "21px" : "21px",
                      }}
                    >
                      Finances
                    </a>
                  </CSSTransition>
                </li>
                <li
                  className="list-unstyled  link-collaps "
                  style={{
                    paddingLeft: "16px",
                    marginRight: "16.5px",
                    borderRadius: "4px",
                    marginTop: "5px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <img
                    src="/icon/mail.png"
                    alt="dashboard icon"
                    width="19"
                    height="15"
                    className="icon"
                    // style={{ marginTop: isOpen ? "26px" : "23px" }}
                  />
                  <CSSTransition
                    in={isOpen}
                    timeout={800}
                    classNames={"fade"}
                    unmountOnExit
                  >
                    <a
                      className="text-decoration-none link_text"
                      href="#"
                      style={{
                        marginTop: isOpen ? "26px" : "21px",
                        fontFamily: "Axiforma , sans-serif",
                        fontWeight: "400",
                      }}
                    >
                      Mails
                    </a>
                  </CSSTransition>
                </li>
                <li
                  className="list-unstyled  link-collaps"
                  style={{
                    paddingLeft: "16px",
                    marginRight: "16.5px",
                    borderRadius: "4px",
                    marginTop: "5px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <img
                    src="/icon/meeting.png"
                    alt="dashboard icon"
                    width="19"
                    height="15"
                    className="icon"
                    // style={{ marginTop: isOpen ? "26px" : "21px" }}
                  />
                  <CSSTransition
                    in={isOpen}
                    timeout={800}
                    classNames={"fade"}
                    unmountOnExit
                  >
                    <a
                      className="text-decoration-none link_text"
                      href="#"
                      style={{
                        marginTop: isOpen ? "26px" : "21px",
                        fontFamily: "Axiforma , sans-serif",
                        fontWeight: "400",
                      }}
                    >
                      Meetings
                    </a>
                  </CSSTransition>
                </li>
              </ul>
            </div>
          </div> */
}
