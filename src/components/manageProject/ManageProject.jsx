import React, { useState, useRef, useEffect } from "react";
import { MdOutlineRefresh } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import { TfiLayers } from "react-icons/tfi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { RxVideo } from "react-icons/rx";
import Sidebar from "../sidebar/Sidebar";

function ManageProject({ isOpen, setIsOpen, toggle }) {
  const [isCollapsed1, setIsCollapsed1] = useState();
  const [isOpen1, setIsOpen1] = useState(false);
  const menuRef = useRef(null);
  const [isOpen2, setIsOpen2] = useState(false);
  const menuRef2 = useRef(null);
  const [isOpen3, setIsOpen3] = useState(false);
  const menuRef3 = useRef(null);

  const handleDropdownToggle = () => {
    setIsOpen1((prevState) => !prevState);
  };

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
  const handleDropdownToggle1 = () => {
    setIsOpen2((prevState) => !prevState);
  };

  useEffect(() => {
    if (menuRef2.current) {
      const children = menuRef.current.children;
      let totalHeight = 0;
      for (let i = 0; i < children.length; i++) {
        totalHeight += children[i].clientHeight;
      }
      menuRef2.current.style.height = isOpen2 ? `${totalHeight}px` : "0";
    }
  }, [isOpen2]);
  const handleDropdownToggle3 = () => {
    setIsOpen3((prevState) => !prevState);
  };

  useEffect(() => {
    if (menuRef3.current) {
      const children = menuRef.current.children;
      let totalHeight = 0;
      for (let i = 0; i < children.length; i++) {
        totalHeight += children[i].clientHeight;
      }
      menuRef3.current.style.height = isOpen3 ? `${totalHeight}px` : "0";
    }
  }, [isOpen3]);

  return (
    <div className="container p-0 m-0">
      <div className="row d-flex justify-content-between">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />

        <div
          className="col-md-6 col-lg-8 position-absolute main"
          style={{
            left: isOpen ? "340px" : "98px",
            marginLeft: "18px",
            width: isOpen ? "632px" : "876px",
            transition: isOpen ? "all .8s" : ".8s",
          }}
        >
        </div>
        <div
          className="col-md-6 col-lg-8 position-absolute main"
          style={{
            left: isOpen ? "340px" : "98px",
            marginLeft: "20px",
            width: isOpen ? "632px" : "876px",
            transition: isOpen ? " .8s ease-in" : ".8s ease-in",
          }}
        >
          <div className="d-flex" style={{ gap: "29px" }}>
            <div>
              <img
                className="sideArow"
                style={{
                  marginTop: "65.67px",
                  marginLeft: "8px",
                }}
                src="/Path646.png"
                width="8"
                height="14"
                alt="arrow"
              />
            </div>
            <div>
              <h1
                style={{
                  fontFamily: "Axiforma",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "28px",
                  lineHeight: "135%",
                  color: "#050504",
                  marginTop: "52px",
                }}
              >
                Make an E-Commerce Website for a Brand Store
              </h1>
            </div>
          </div>
          {/* <Tabs2 /> */}
          <div style={{ marginTop: "23px" }}>
          </div>
        </div>
        <div
          className="col-3 position-absolute end-0 top-0 "
          style={{ marginTop: "56px" }}
        >
          <div className="card" style={{ marginTop: "24px" }}>
            <div className="card-body">
              <div
                className="d-flex justify-content-between"
                style={{ borderBottom: "1px solid #050504" }}
              >
                <h5 className="card-title">Tips</h5>
                <MdOutlineRefresh className="card-title" />
              </div>
              <p className="card-text" style={{ marginTop: "24px" }}>
                Listen Actively, Repeat Your Client’s Concerns. Take Action and
                Follow up..
              </p>
            </div>
          </div>
          <div
            className="card"
            style={{
              marginTop: "24px",
            }}
          >
            <div
              className="card-body"
              style={
                {
                  //  marginTop: "16px"
                }
              }
            >
              <span
                style={{
                  width: "228px",
                  height: "24px",
                  fontFamily: "Axiforma",
                  fontStyle: " normal",
                  fontWeight: "700",
                  fontSize: "18px",
                  lineHeight: "135%",
                  color: "#050504",
                  //   marginTop:
                  //  "24px", marginBottom:"16px"
                }}
                onClick={handleDropdownToggle}
              >
                Order Details
              </span>
              <div className="testing" ref={menuRef}>
                <hr />

                <div className="d-flex justify-content-between">
                  <h3
                    style={{
                      width: " 96px",
                      height: " 20px",
                      fontFamily: "Axiforma",
                      fontStyle: " normal",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "140%",
                      color: " #707066",
                    }}
                  >
                    Order Started
                  </h3>
                  <p
                    style={{
                      width: "121px",
                      height: "20px",
                      fontFamily: "Axiforma",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "140%",
                      color: "#050504",
                      textAlign: "right",
                    }}
                  >
                    March 1, 10:06PM
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <h3
                    style={{
                      width: " 131px",
                      height: " 20px",
                      fontFamily: "Axiforma",
                      fontStyle: " normal",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "140%",
                      color: " #707066",
                    }}
                  >
                    Estimated Delivery
                  </h3>
                  <p
                    style={{
                      width: "121px",
                      height: "20px",
                      fontFamily: "Axiforma",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "140%",
                      color: "#050504",
                      textAlign: "right",
                    }}
                  >
                    April 2022
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <h3
                    style={{
                      width: " 96px",
                      height: " 20px",
                      fontFamily: "Axiforma",
                      fontStyle: " normal",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "140%",
                      color: " #707066",
                    }}
                  >
                    Payment Plan
                  </h3>
                  <p
                    style={{
                      width: "121px",
                      height: "20px",
                      fontFamily: "Axiforma",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "140%",
                      color: "#050504",
                      textAlign: "right",
                    }}
                  >
                    Basic
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <h3
                    style={{
                      width: " 100px",
                      height: " 20px",
                      fontFamily: "Axiforma",
                      fontStyle: " normal",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "140%",
                      color: " #707066",
                    }}
                  >
                    Order Number
                  </h3>
                  <p
                    style={{
                      width: "121px",
                      height: "20px",
                      fontFamily: "Axiforma",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "140%",
                      color: "#050504",
                      textAlign: "right",
                    }}
                  >
                    #123ffus
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <h3
                    style={{
                      width: " 120px",
                      height: " 20px",
                      fontFamily: "Axiforma",
                      fontStyle: " normal",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "140%",
                      color: " #707066",
                    }}
                  >
                    Project Manager
                  </h3>
                  <p
                    style={{
                      width: "121px",
                      height: "20px",
                      fontFamily: "Axiforma",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "140%",
                      color: "#050504",
                      textAlign: "right",
                    }}
                  >
                    Alpha Bravo
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <h3
                    style={{
                      width: " 120px",
                      height: " 20px",
                      fontFamily: "Axiforma",
                      fontStyle: " normal",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "140%",
                      color: " #707066",
                    }}
                  >
                    Project Manager
                  </h3>
                  <p
                    style={{
                      width: "121px",
                      height: "20px",
                      fontFamily: "Axiforma",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "140%",
                      color: "#050504",
                      textAlign: "right",
                    }}
                  >
                    Alpha Bravo
                  </p>
                </div>
              </div>
            </div>

            <hr />
            <div
              className="card-body"
              style={
                {
                  //  marginTop: "16px"
                }
              }
            >
              <span
                style={{
                  width: "228px",
                  height: "24px",
                  fontFamily: "Axiforma",
                  fontStyle: " normal",
                  fontWeight: "700",
                  fontSize: "18px",
                  lineHeight: "135%",
                  color: "#050504",

                  //  marginTop: "24px", marginBottom:"16px"
                }}
                onClick={handleDropdownToggle3}
              >
                Milestones
              </span>

              <div ref={menuRef3} className="testing">
                <hr
                // style={{
                //   width:"100%"
                // }}
                />

              </div>
            </div>
          </div>
          <div className="card" style={{ marginTop: "24px" }}>
            <span
              style={{
                width: "228px",
                height: "24px",
                fontFamily: "Axiforma",
                fontStyle: " normal",
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "135%",
                color: "#050504",

                marginTop: "24px",
                marginBottom: "16px",
              }}
              // onClick={() => setIsCollapsed2(!isCollapsed2)}
              onClick={handleDropdownToggle1}
            >
              Support
            </span>

            <div
              className="testing"
              ref={menuRef2}
              // className="collapse-content"
              // style={{ display: isCollapsed2 ? "none" : "block" }}
              // aria-expanded={isCollapsed2}
            >
              <hr />
              <ul
                className="p-0 "
                style={{ marginLeft: "25px", top: isOpen ? "443px" : "385px" }}
              >
                <li className="list-unstyled  d-flex">
                  <TfiLayers
                    className="icon"
                    style={{ marginTop: isOpen ? "11px" : "15px" }}
                  />

                  <a
                    className="text-decoration-none link_text"
                    style={{
                      width: "44px",
                      height: "21px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: " 14px",
                      lineHeight: "21px",
                      color: "#050504",
                    }}
                    href="#"
                  >
                    FAQS?
                  </a>
                </li>
                <li className="list-unstyled  d-flex ">
                  <HiOutlineChatBubbleLeftRight
                    className="icon"
                    style={{ marginTop: isOpen ? "11px" : "15px" }}
                  />

                  <a
                    className="text-decoration-none link_text"
                    style={{
                      width: "83px",
                      height: "21px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: " 14px",
                      lineHeight: "21px",
                      color: "#050504",
                    }}
                    href="#"
                  >
                    Help Center
                  </a>
                </li>

                <li className="list-unstyled  d-flex">
                  <RxVideo
                    className="icon"
                    style={{ marginTop: isOpen ? "11px" : "15px" }}
                  />

                  <a
                    className="text-decoration-none link_text"
                    style={{
                      width: "82px",
                      height: "21px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: " 14px",
                      lineHeight: "21px",
                      color: "#050504",
                    }}
                    href="#"
                  >
                    See Tutorial
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageProject;
