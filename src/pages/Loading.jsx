import styles from "../styles/Loading.module.css";

const Loading = () => {
   return (
      <div className={styles.container}>
         <div className={styles.spinner}></div>
      </div>
   );
};

export default Loading;
