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
        <SkillList />
      </div>
    </div>
  );
}

export default App;
// 5/45;
