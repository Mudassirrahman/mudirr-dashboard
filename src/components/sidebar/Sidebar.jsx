import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import "./sidebar.css";
import { accountLinks, mainLinks, upcomingLinks } from "./SidebarData";
import { AppStateContext } from "../../store/aap-state-store";
import { Link } from "react-router-dom";

function Sidebar() {
  const { isOpen, setIsOpen, selectedTab, toggle, handleSelectedTab } =
    useContext(AppStateContext);
  // eslint-disable-next-line
  const [isCollapsed, setIsCollapsed] = useState();
  const [isOpenForAccount, setIsOpenForAccount] = useState(true);
  const [isOpenForUpComing, setIsOpenForUpComing] = useState(true);
  const [searchFocused, setSearchFocused] = useState(false);
  const menuRefAccount = useRef(null);
  const menuRefUpcoming = useRef(null);

  const handleAccountDropdownToggle = useCallback(() => {
    setIsOpenForAccount((prevState) => !prevState);
  }, [setIsOpenForAccount]);

  const handleUpcomingDropdownToggle = useCallback(() => {
    setIsOpenForUpComing((prevState) => !prevState);
  }, [setIsOpenForUpComing]);

  useEffect(() => {
    if (!isOpen) {
      handleAccountDropdownToggle();
      setIsOpenForAccount(true); // Set isOpenForAccount to true when sidebar is closed
      handleUpcomingDropdownToggle();
      setIsOpenForUpComing(true); // Set isOpenForAccount to true when sidebar is closed
    }

    if (menuRefAccount.current) {
      const children = menuRefAccount.current.children;
      let totalHeight = 0;
      for (let i = 0; i < children.length; i++) {
        totalHeight += children[i].clientHeight;
      }
      menuRefAccount.current.style.height = isOpenForAccount
        ? `${totalHeight}px`
        : "0";
    }

    if (menuRefUpcoming.current) {
      const children = menuRefUpcoming.current.children;
      let totalHeight = 0;
      for (let i = 0; i < children.length; i++) {
        totalHeight += children[i].clientHeight;
      }
      menuRefUpcoming.current.style.height = isOpenForUpComing
        ? `${totalHeight}px`
        : "0";
    }
  }, [
    isOpen,
    isOpenForAccount,
    isOpenForUpComing,
    handleAccountDropdownToggle,
    handleUpcomingDropdownToggle,
  ]);

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
                src="/DP.jpg"
                alt="dm img"
                className="profile-img rounded-circle me-2"
              />

              <h2
                className=" acc-dropdown position-relative"
                style={{ visibility: isOpen ? "visible " : "hidden" }}
              >
                Mudassirrehman1989@gmail.com
                <IoIosArrowDown className="downArrow" />
              </h2>
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
            <ul className="dashboard-Main-link-Ul p-0  mb-0">
              {mainLinks.map((props) => (
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
                  <Link to={props.linkName}>
                    <div className="icon">
                      <img
                        className="dashboard-icone-img"
                        src={props.imgUrl}
                        alt={props.alt}
                      />
                    </div>
                  </Link>
                  <Link
                    to={props.linkName}
                    className="dashboard-Main-link-name"
                    href=""
                    style={{ visibility: isOpen ? "visible " : "hidden" }}
                  >
                    <div
                      className="link_text"
                      style={{
                        color:
                          selectedTab === props.linkName
                            ? "#55619C"
                            : "#050504",
                        fontWeight: selectedTab === props.linkName ? 600 : 400,
                      }}
                    >
                      {props.linkName}
                    </div>
                  </Link>
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
            <h1
              className="dropdownLinks-TITLE"
              style={{
                // display: isOpen ? "block" : "none",
                visibility: isOpen ? "visible " : "hidden", // for smoth behav if we use display block and none then smothnes not working
              }}
              onClick={handleAccountDropdownToggle}
            >
              Account
              <IoIosArrowDown
                className=" position-absolute"
                style={{ width: "18px", height: "18px", top: "2px", right: 0 }}
              />
            </h1>
            <div
              className="collapse-content"
              style={{
                display: isCollapsed && isOpen ? "none" : "block",
                marginTop: isOpen ? "6px" : "-25px",
                transition: ".5s ease-in",
              }}
            >
              <div className="dashboard-Main-link">
                <ul
                  className="dashboard-second-link-ul p-0 mb-0"
                  ref={menuRefAccount}
                >
                  {accountLinks.map((props) => (
                    <li className="link link-collaps" key={props.id}>
                      <div className="icon">
                        <img
                          className="dashboard-icone-img"
                          src={props.imgUrl}
                          alt={props.alt}
                        />
                      </div>
                      <div
                        className="link_text"
                        style={{
                          color:
                            selectedTab === props.linkName
                              ? "#55619C"
                              : "#050504",
                          fontWeight:
                            selectedTab === props.linkName ? 600 : 400,
                          fontFamily: "'poppins' ,sans-serif",
                        }}
                      >
                        {props.linkName}
                      </div>
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
            <h1
              className="dropdownLinks-TITLE"
              style={{
                // display: isOpen ? "block" : "none",
                visibility: isOpen ? "visible " : "hidden", // for smoth behav if we use display block and none then smothnes not working
              }}
              onClick={handleUpcomingDropdownToggle}
            >
              Upcoming
              <IoIosArrowDown
                className=" position-absolute"
                style={{ width: "18px", height: "18px", top: "2px", right: 0 }}
              />
            </h1>
            <div
              className="collapse-content"
              style={{
                display: isCollapsed && isOpen ? "none" : "block",
                marginTop: isOpen ? "6px" : "-25px",
                transition: ".5s ease-in",
              }}
            >
              <div className="dashboard-Main-link">
                <ul
                  className="dashboard-second-link-ul p-0 mb-0"
                  ref={menuRefUpcoming}
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
                      <div
                        className="link_text"
                        style={{
                          color:
                            selectedTab === props.linkName
                              ? "#55619C"
                              : "#050504",
                          fontWeight:
                            selectedTab === props.linkName ? 600 : 400,
                        }}
                      >
                        {props.linkName}
                      </div>
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
        </div>
      </div>
    </>
  );
}

export default Sidebar;
