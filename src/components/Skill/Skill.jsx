import React from "react";

const Skill = ({ skill, color, level }) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
        {level === "beginner" && "👨‍🦲"}
      </span>
    </div>
  );
};

export default Skill;

// <div style={props.style} className="skill">
//   <span>{props.skill}</span>
//   <span>{props.emoji}</span>
// </div>;
