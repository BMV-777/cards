import React from "react";

import css from "./Intro.module.css";

const Intro = () => {
  return (
    <div>
      <h1>Maks Borenkov</h1>
      <p className={css.block}>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoi the Portuguese sun at the beach.
      </p>
    </div>
  );
};

export default Intro;
