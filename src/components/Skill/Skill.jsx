import React from "react";

const Skill = (props) => {
  return (
    <div style={props.style} className="skill">
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
};

export default Skill;
