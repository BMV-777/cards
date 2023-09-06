import React from "react";

import Skill from "../Skill/Skill";

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill
        style={{
          backgroundColor: "blue",
        }}
        skill="HTML + CSS"
        emoji="💪"
      />
      <Skill
        style={{
          backgroundColor: "yellow",
        }}
        skill="JavaScript"
        emoji="💪"
      />
      <Skill
        style={{
          backgroundColor: "#B8D09C",
        }}
        skill="Web Desing"
        emoji="💪"
      />
      <Skill
        style={{
          backgroundColor: "#F15229",
        }}
        skill="Git and GitHub"
        emoji="👍"
      />
      <Skill
        style={{
          backgroundColor: "aqua",
        }}
        skill="React"
        emoji="💪"
      />
      <Skill
        style={{
          backgroundColor: "red",
        }}
        skill="Svelte"
        emoji="👶"
      />
    </div>
  );
};

export default SkillList;

// <img src={props.photoName} alt="sila" width="17" height="17" />;
