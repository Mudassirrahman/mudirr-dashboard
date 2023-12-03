import React, { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./sidebar.css";
import { accountLinks, mainLinks, upcomingLinks } from "./SidebarData";

function Sidebar({
  isOpen,
  setIsOpen,
  toggle,
  selectedTab,
  setSelectedTab,
  handleSelectedTab,
}) {
  // eslint-disable-next-line
  const [isCollapsed, setIsCollapsed] = useState();
  const [isCollapsed1, setIsCollapsed1] = useState(false);
  const [isOpen1, setIsOpen1] = useState(true);
  const [searchFocused, setSearchFocused] = useState(false);
  const menuRef = useRef(null);

   const handleDropdownToggle = useCallback(() => {
    setIsOpen1((prevState) => !prevState);
  }, [setIsOpen1]);

  useEffect(() => {
    if (!isOpen) {
      handleDropdownToggle();
      setIsOpen1(true); // Set isOpen1 to true when sidebar is closed
    }

    if (menuRef.current) {
      const children = menuRef.current.children;
      let totalHeight = 0;
      for (let i = 0; i < children.length; i++) {
        totalHeight += children[i].clientHeight;
      }
      menuRef.current.style.height = isOpen1 ? `${totalHeight}px` : "0";
    }
  }, [isOpen, isOpen1, handleDropdownToggle]);

  const handleSearchClick = () => {
    if (!isOpen) {
      setIsOpen(true); // Open the sidebar if it's closed when the search icon is clicked
    }
    setSearchFocused(true);
  };

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
                src="/DP.jpg"
                alt="dm img"
                width="40"
                height="40"
                className="rounded-circle me-2"
              />

              <strong
                className="dropdown-toggle acc-dropdown"
                style={{ visibility: isOpen ? "visible " : "hidden" }}
              >
                Mudassirrehman1989@email.com
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
              Mudassir Rehman
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
              autoFocus={searchFocused}
            />
            <AiOutlineSearch
              className="sarch-icon"
              style={{ left: isOpen ? "270.42px" : "35.4px" }}
              onClick={handleSearchClick}
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
              {mainLinks.map((props, index) => (
                <li
                  key={props.id}
                  className="link"
                  style={{
                    background: selectedTab === props.linkName && "#ECEDF3",
                  }}
                  onClick={() => {
                    handleSelectedTab(props.linkName);
                  }}
                >
                  <div className="icon">
                    <img
                      className="dashboard-icone-img"
                      src={props.imgUrl}
                      alt={props.alt}
                    />
                  </div>
                  <div className="link_text">{props.linkName}</div>
                </li>
              ))}
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
                visibility: isOpen ? "visible " : "hidden", // for smoth behav if we use display block and none then smothnes not working
                transition: ".5s ease-in",
                marginLeft: "32px",
                marginTop: "10px",
                fontFamily: "Axiforma , sans-serif",
                fontWeight: "600",
                cursor: "pointer",
              }}
              onClick={handleDropdownToggle}
            >
              Account
            </span>
            <div
              className="collapse-content"
              style={{
                display: isCollapsed && isOpen ? "none" : "block",
                marginTop: isOpen ? "6px" : "-20px",
                transition: ".5s ease-in",
              }}
            >
              <div className="dashboard-Main-link">
                <ul
                  className="p-0 mb-0"
                  style={{
                    overflow: "hidden",
                    transition: ".5s ease-in",
                  }}
                  ref={menuRef}
                >
                  {accountLinks.map((props) => (
                    <li className="link link-collaps">
                      <div className="icon">
                        <img
                          className="dashboard-icone-img"
                          src={props.imgUrl}
                          alt={props.alt}
                        />
                      </div>
                      <div className="link_text">{props.linkName}</div>
                    </li>
                  ))}
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
                  {upcomingLinks.map((props) => (
                    <li key={props.id} className="link link-collaps">
                      <div className="icon">
                        <img
                          className="icon"
                          src={props.imgUrl}
                          alt={props.alt}
                        />
                      </div>
                      <div className="link_text">{props.linkName}</div>
                    </li>
                  ))}
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
