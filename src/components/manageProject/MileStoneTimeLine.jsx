
import { useState } from "react";

function MileStoneTimeLine() {
  const [milestones, setMilestones] = useState([
    { name: "Milestone 1", completed: false },
    { name: "Milestone 2", completed: false },
    { name: "Milestone 3", completed: false },
    { name: "Milestone 4", completed: false },
    { name: "Milestone 4", completed: false },
  ]);

  const handleMilestoneClick = (index) => {
    const updatedMilestones = [...milestones];
    updatedMilestones[index].completed = true;
    setMilestones(updatedMilestones);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {milestones.map((milestone, index) => (
          <div key={index}
           >
            <div
              style={{
                width: "19px",
                height: "19px",
                borderRadius: "50%",
                border:  milestone.completed ? "white" : "2px solid #050504",
                backgroundColor: milestone.completed ? "#377C5C" : "white",
              }}
              onClick={() => handleMilestoneClick(index)}
            />
            {index !== milestones.length - 1 && (
              <div
                style={{
                  height: "21px",
                  width: "2px",
                  marginLeft: "9px",
                  backgroundColor: milestone.completed ? "#377C5C" : "black",
                }}
              />
            )}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {milestones.map((milestone, index) => (
          <div key={index} style={{ margin: "1px 16px" }}>
            <p
              style={{
                color:  "#707066",
              }}
            >
              {milestone.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MileStoneTimeLine;
