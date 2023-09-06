import React from "react";

function Avatar(props) {
  return (
    <>
      <img className={props.className} src={props.photoName} alt="foto" />
    </>
  );
}

export default Avatar;
