import React from "react";

function Avatar(props) {
  return (
    <div>
      <img src={props.photoName} alt="foto" width="360" height="250" />
    </div>
  );
}

export default Avatar;
