import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

function Milestones() {
  return (
    <div
      className="bg-white"
      style={{
        marginTop: "23px",
        background: "#FFFFFF",
        boxShadow: "0px 0px 4px rgba(164, 164, 164, 0.28)",
      }}
    >
      <table className="bg-white w-100">
        <thead className="bg-white">
          <tr className="bg-white">
            <th
              className="text-start bg-white"
              scope="col"
              style={{
                padding: " 24px 0px 8px 24px",
                fontFamily: "Axiforma , sans-serif",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#707066",
                width: "110px",
              }}
            >
              Due On
            </th>
            <th
              className="text-start"
              scope="col"
              style={{
                padding: " 24px 0px 8px 24px",
                fontFamily: "Axiforma , sans-serif",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#707066",
                width: "300px",
              }}
            >
              Milestone Name
            </th>
            <th
              className="text-start"
              scope="col"
              style={{
                padding: " 24px 0px 8px 12px",
                fontFamily: "Axiforma , sans-serif",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#707066",
                width: "110px",
              }}
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="bg-white">
            <td
              data-label="Due Date"
              style={{
                textAlign: "left",
                paddingLeft: "24px",
                width: "110px",
                fontFamily: "Axiforma , sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#050504",
              }}
            >
              Dec 2022
            </td>
            <td data-label="Account" style={{ textAlign: "left" }}>
              Request & Review Business idea & Finalize the deliverables
            </td>
            <td data-label="Amount">
              <button
                className="btn "
                style={{
                  color: "#479B74",
                  marginRight: "24px",
                  padding: "4px 8px",
                  gap: "8px",
                  isolation: " isolate",
                  width: " 104px",
                  height: " 35px",
                  background: "#E8F7F0",
                  borderRadius: "4px",
                }}
              >
                Completed
              </button>
            </td>
            <div className="dropdown">
              <BsThreeDotsVertical
                className="mt-4 ms-4   dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul
                class="dropdown-menu"
                id="milestoneReport"
                style={{
                  inset: "0px auto auto -185px",
                }}
              >
                <li>
                  <a class="dropdown-item" href="#">
                    See Report{" "}
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Download Report
                  </a>
                </li>
                <hr />
                <li>
                  <a class="dropdown-item" href="#">
                    Download All Reports
                  </a>
                </li>
              </ul>
            </div>
          </tr>
          <tr className="bg-white">
            <td
              data-label="Due Date"
              style={{
                textAlign: "left",
                paddingLeft: "24px",
                fontFamily: "Axiforma , sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#050504",
              }}
            >
              jan 2023
            </td>
            <td scope="row" data-label="Account" style={{ textAlign: "left" }}>
              Brand identity Requirements and review
            </td>

            <td data-label="Amount">
              <button
                className="btn"
                style={{
                  color: "#55619C",
                  marginRight: "24px",
                  padding: "4px 8px",
                  gap: "8px",
                  isolation: " isolate",
                  width: " 104px",
                  height: " 35px",
                  background: "#ECEDF3",
                  borderRadius: "4px",
                }}
              >
                Ongoing
              </button>
            </td>
            <div className="dropdown">
              <BsThreeDotsVertical
                className="mt-4 ms-4   dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul class="dropdown-menu    " id="milestoneReport">
                <li>
                  <a class="dropdown-item" href="#">
                    See Report{" "}
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Download Report
                  </a>
                </li>
                <hr />
                <li>
                  <a class="dropdown-item" href="#">
                    Download All Reports
                  </a>
                </li>
              </ul>
            </div>
          </tr>
          <tr className="bg-white">
            <td
              data-label="Due Date"
              style={{
                textAlign: "left",
                paddingLeft: "24px",
                fontFamily: "Axiforma , sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#050504",
              }}
            >
              Feb 2023
            </td>
            <td scope="row" data-label="Account" style={{ textAlign: "left" }}>
              Design approval
            </td>
            <td data-label="Amount">
              <button
                className="btn"
                style={{
                  color: "#55619C",
                  marginRight: "24px",
                  padding: "4px 8px",
                  gap: "8px",
                  isolation: " isolate",
                  width: " 104px",
                  height: " 35px",
                  background: "#ECEDF3",
                  borderRadius: "4px",
                }}
              >
                Pending
              </button>
            </td>
            <div className="dropdown">
              <BsThreeDotsVertical
                className="mt-4 ms-4   dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul class="dropdown-menu    " id="milestoneReport">
                <li>
                  <a class="dropdown-item" href="#">
                    See Report
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Download Report
                  </a>
                </li>
                <hr />
                <li>
                  <a class="dropdown-item" href="#">
                    Download All Reports
                  </a>
                </li>
              </ul>
            </div>
          </tr>
          <tr className="bg-white">
            <td
              data-label="Due Date"
              style={{
                textAlign: "left",
                paddingLeft: "24px",
                fontFamily: "Axiforma , sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#050504",
              }}
            >
              March 2023
            </td>
            <td scope="row" data-label="Acount" style={{ textAlign: "left" }}>
              The development phase
            </td>
            <td data-label="Amount">
              <button
                className="btn"
                style={{
                  color: "#55619C",
                  marginRight: "24px",
                  padding: "4px 8px",
                  gap: "8px",
                  isolation: " isolate",
                  width: " 104px",
                  height: " 35px",
                  background: "#ECEDF3",
                  borderRadius: "4px",
                }}
              >
                Ongoing
              </button>
            </td>
            <div className="dropdown">
              <BsThreeDotsVertical
                className="mt-4 ms-4   dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul class="dropdown-menu    " id="milestoneReport">
                <li>
                  <a class="dropdown-item" href="#">
                    See Report{" "}
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Download Report
                  </a>
                </li>
                <hr />
                <li>
                  <a class="dropdown-item" href="#">
                    Download All Reports
                  </a>
                </li>
              </ul>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Milestones;
