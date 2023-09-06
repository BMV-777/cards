import React from "react";

import "./index.css";

import Avatar from "./components/Avatar/Avatar";
import Intro from "./components/Intro/Intro";
import SkillList from "./components/SkillList/SkillList.jsx";

// const TodoComponent = {
//   backgroundColor: "blue",
// };

function App() {
  return (
    <div className="card">
      <Avatar photoName="img/cop.jpg" className="avatar" />
      <div className="data">
        <Intro />
        <SkillList
          style={{
            backgroundColor: "blue",
            width: "140px",
            height: "20px",
            borderRadius: "4px",
          }}
          name={"HTML + CSS"}
        />
        <SkillList
          style={{
            backgroundColor: "yellow",
            width: "140px",
            height: "20px",
            borderRadius: "4px",
          }}
          name={"JavaScript"}
          photoName="./img/sila.png"
        />
        <SkillList
          style={{
            backgroundColor: "#B8D09C",
            width: "140px",
            height: "20px",
            borderRadius: "4px",
          }}
          name={"Web Desing"}
          photoName="./img/sila.png"
        />
        <SkillList
          style={{
            backgroundColor: "#F15229",
            width: "160px",
            height: "20px",
            borderRadius: "4px",
          }}
          name={"Git and GitHub"}
          photoName="./img/ok.png"
        />
        <SkillList
          style={{
            backgroundColor: "aqua",
            width: "90px",
            height: "20px",
            borderRadius: "4px",
          }}
          name={"React"}
          photoName="./img/sila.png"
        />
        <SkillList
          style={{
            backgroundColor: "red",
            width: "90px",
            height: "20px",
            borderRadius: "4px",
          }}
          name={"Svelte"}
          photoName="./img/smile.png"
        />
      </div>
    </div>
  );
}

export default App;
// 5/44;
