import { TCloud } from "../../types";
import styles from "./cloud.module.scss";

export const Could = (props: TCloud) => {
  return (
    <div
      className={styles.cloud}
      style={{
        left: props.leftPosition + "%",
        top: props.topPosition + "%",
      }}
    >
      <div className={styles.cloud_water}></div>
      {props.bolt ? <div className={styles.cloud_bolt}></div> : ""}
    </div>
  );
};
