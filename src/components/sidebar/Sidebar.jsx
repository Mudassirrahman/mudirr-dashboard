import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const [isCollapsed, setIsCollapsed] = useState();
  const [isCollapsed1, setIsCollapsed1] = useState(false);
  const [isOpen1, setIsOpen1] = useState(true);
  const menuRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsOpen1((prevState) => !prevState);
  };

 
  useEffect(() => {
    if (!isOpen) {
      handleDropdownToggle();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setIsOpen1(true); // Set isOpen1 to true when sidebar is closed
    }
  }, [isOpen]);

   useEffect(() => {
    if (menuRef.current) {
      const children = menuRef.current.children;
      let totalHeight = 0;
      for (let i = 0; i < children.length; i++) {
        totalHeight += children[i].clientHeight;
      }
      menuRef.current.style.height = isOpen1 ? `${totalHeight}px` : "0";
    }
  }, [isOpen1]);


  return (
    <>
      <div className=" p-0 m-0  ">
        <div style={{ width: isOpen ? "332px" : "93px" }} className="sidebar">
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
                marginLeft: isOpen ? "317px" : "77px",
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
              href="/"
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
                <a className="dropdown-item" href="/">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/">
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
          <div className="dashboard-Main-link">
            <ul
              className="p-0  mb-0"
              style={{
                marginTop: "10px",
                transition: ".5s ease-in",
              }}
            >
              <li className="link" style={{ background: "#ECEDF3" }}>
                <div className="icon">
                  <img
                    className="dashboard-icone-img"
                    src="/icon/dashbord.png"
                    alt="dashboard icon"
                  />
                </div>
                <div className="link_text">Dashboard</div>
              </li>

              <li className="link">
                <div className="icon">
                  <img
                    className="dashboard-icone-img"
                    src="/icon/chat.png"
                    alt="dashboard icon"
                  />
                </div>
                <div className="link_text">Chat</div>
              </li>

              <li className="link">
                <div className="icon">
                  <img
                    className="dashboard-icone-img"
                    src="/icon/service.png"
                    alt="dashboard icon"
                  />
                </div>
                <div className="link_text">Services</div>
              </li>

              <li className="link">
                <div className="icon">
                  <img
                    className="dashboard-icone-img"
                    src="/icon/add.png"
                    alt="dashboard icon"
                  />
                </div>
                <div className="link_text">Add</div>
              </li>
            </ul>
          </div>
          <hr
            style={{
              margin: "6px 17px 8px",
              width: isOpen ? "90%" : "65%",
              transition: ".5s ease-in",
            }}
          />

          <div>
            <span
              style={{
                // display: isOpen ? "block" : "none",
                visibility: isOpen ? "visible " : "hidden",  // for smoth behav if we use display block and none then smothnes not working
                transition: ".5s ease-in",
                marginLeft: "32px",
                marginTop: "10px",
                fontFamily: "Axiforma , sans-serif",
                fontWeight: "600",
                cursor: "pointer"
              }}
              onClick={handleDropdownToggle}
            >
              Account
            </span>
            <div
              className="collapse-content"
              style={{
                display: isCollapsed && isOpen ? "none" : "block",
                marginTop: isOpen ?  "6px" : "-20px",
                transition: ".5s ease-in",
              }}
            
            >
              <div className="dashboard-Main-link" >
                <ul
                  className="p-0 mb-0"
                  style={{
                    overflow: "hidden",
                    transition: ".5s ease-in",
                  }}
                  ref={menuRef}
                >
                  <li className="link link-collaps">
                    <div className="icon">
                      <img
                        className="dashboard-icone-img"
                        src="/icon/alert.png"
                        alt="dashboard icon"
                      />
                    </div>
                    <div className="link_text">Notification</div>
                  </li>
                  <li className="link link-collaps">
                    <div className="icon">
                      <img
                        className="dashboard-icone-img"
                        src="/icon/shudailMeeting.png"
                        alt="dashboard icon"
                      />
                    </div>
                    <div className="link_text">Schedule a 30 min meeting</div>
                  </li>
                  <li className="link link-collaps">
                    <div className="icon">
                      <img
                        className="dashboard-icone-img"
                        src="/icon/setting.png"
                        alt="dashboard icon"
                      />
                    </div>
                    <div className="link_text">Setting</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr
            style={{
              margin: "6px 17px 0",
              width: isOpen ? "90%" : "65%",
              transition: ".5s ease-in",
            }}
          />

          <div>
            <span
              style={{
                display: isOpen ? "block" : "none",
                transition: ".5s ease-in",
                marginLeft: "32px",
                marginTop: "10px",
                fontFamily: "Axiforma , sans-serif",
                fontWeight: "600",
              }}
              onClick={() => setIsCollapsed1(!isCollapsed1)}
            >
              Upcoming
            </span>
            <div
              className="collapse-content"
              style={{
                display: isCollapsed1 && isOpen ? "none" : "block",
                marginTop: "6px",
                transition: ".5s ease-in",
              }}
              aria-expanded={isCollapsed1}
            >
              <div className="dashboard-Main-link">
                <ul
                  className="p-0 mb-0"
                  style={{
                    overflow: "hidden",
                    transition: ".5s ease-in",
                  }}
                >
                  <li className="link link-collaps">
                    <div className="icon">
                      <img
                        className="/icon/"
                        src="/icon/finance.png"
                        alt="dashboard icon"
                      />
                    </div>
                    <div className="link_text">Finances</div>
                  </li>
                  <li className="link link-collaps">
                    <div className="icon">
                      <img
                        className="icon"
                        src="/icon/mail.png"
                        alt="dashboard icon"
                      />
                    </div>
                    <div className="link_text">Mails</div>
                  </li>
                  <li className="link link-collaps">
                    <div className="icon">
                      <img
                        className="/icon"
                        src="/icon/meeting.png"
                        alt="dashboard icon"
                      />
                    </div>
                    <div className="link_text">Meetings</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
