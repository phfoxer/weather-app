import React from "react";
import styles from "./sun.module.scss";
import { ISun } from "../../types";

const Sun: React.FC<ISun> = (position) => {
  return (
    <div
      className={styles.sun}
      id="sun"
      style={{
        position: "absolute",
        left: position.leftPosition + "%",
        top: position.topPosition + "%",
      }}
    ></div>
  );
};

export default Sun;
