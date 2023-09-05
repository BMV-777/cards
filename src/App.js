import Avatar from "./components/Avatar/Avatar";
import Intro from "./components/Intro/Intro";
import SkillList from "./components/SkillList/SkillList.jsx";

// const TodoComponent = {
//   backgroundColor: "blue",
// };

function App() {
  return (
    <div className="card">
      <Avatar photoName="./img/cop.jpg" />
      <div className="data">
        <Intro />
        <SkillList
          style={{
            backgroundColor: "blue",
            width: "150px",
            height: "20px",
            borderRadius: "4px",
          }}
          name={"HTML + CSS"}
          photoName="./img/sila.png"
        />
      </div>
    </div>
  );
}

export default App;
// 5/44;
