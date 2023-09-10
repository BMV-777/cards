import React from "react";

import Skill from "../Skill/Skill";

const SkillList = ({ skills }) => {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill color={skill.color} skill={skill.skill} level={skill.level} />
      ))}
    </div>
  );
};

export default SkillList;

//  <Skill
//       // style={{
//       //   backgroundColor: "blue",
//       // }}
//       color="blue"
//       skill="HTML + CSS"
//       emoji="💪"
//     />
//     <Skill
//       // style={{
//       //   backgroundColor: "yellow",
//       // }}
//       color="yellow"
//       skill="JavaScript"
//       emoji="💪"
//     />
//     <Skill
//       // style={{
//       //   backgroundColor: "#B8D09C",
//       // }}
//       color="#B8D09C"
//       skill="Web Desing"
//       emoji="💪"
//     />
//     <Skill
//       // style={{
//       //   backgroundColor: "#F15229",
//       // }}
//       color="#F15229"
//       skill="Git and GitHub"
//       emoji="👍"
//     />
//     <Skill
//       // style={{
//       //   backgroundColor: "aqua",
//       // }}
//       color="aqua"
//       skill="React"
//       emoji="💪"
//     />
//     <Skill
//       // style={{
//       //   backgroundColor: "red",
//       // }}
//       color="red"
//       skill="Svelte"
//       emoji="👶"
//     />
