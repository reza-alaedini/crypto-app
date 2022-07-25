import React from "react";
import Gif from "./../gif/Loader.gif";

//Style
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div
      className={styles.container}
    >
      <img src={Gif} alt="Loader" className={styles.loaderGif} />
    </div>
  );
};

export default Loader;
