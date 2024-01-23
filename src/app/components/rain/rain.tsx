import styles from "./rain.module.scss";

export const Rain = () => {
    const dots:number[] = Array.from({length: 150}, (_, i) => i);
  return (
    <div>
     {dots.map((i)=><i key={i} className={styles.rain}></i>)}  
    </div>
  );
};
