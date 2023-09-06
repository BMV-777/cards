import React from "react";
import css from "./SkillList.module.css";

const SkillList = (props) => {
  return (
    <div style={props.style}>
      <ul className={css.skill_list}>
        <li className={css.skill}>
          <b>{props.name}💪</b>
          <img src={props.photoName} alt="sila" width="17" height="17" />
        </li>
      </ul>
    </div>
  );
};

export default SkillList;
