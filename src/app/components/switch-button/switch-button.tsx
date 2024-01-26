import React from "react";
import styles from "./switch-button.module.scss";
import { TWeatherUnit } from "../../types";

interface SwitchButtonProps {
  onCheck: (units: TWeatherUnit) => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = (props) => {
  const onChanges = (event: any) => {
    props.onCheck(event.target.checked ? 'metric' : 'imperial');
  };
  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={onChanges} />
      <div className={styles.switch_slider}>
        <div>°C</div>
        <div>°F</div>
      </div>
    </label>
  );
};

export default SwitchButton;
