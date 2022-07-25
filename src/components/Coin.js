import React from "react";

//Style
import styles from "./Coin.module.css";

const Coin = ({ name, symbol, image, price, marketCap, priceChange }) => {
  return (
    <div className={styles.container}>
      <div
        className={
          priceChange > 0 ? styles.coinContainerDec : styles.coinContainerAsc
        }
      >
        <img src={image} alt="coinImg" className={styles.coinImg} />
        <span className={styles.coinName}>{name}</span>
        <span>{symbol.toUpperCase()}</span>
        <span>$ {price.toLocaleString()}</span>
        <span>% {priceChange.toFixed(2)}</span>
        <span>$ {marketCap.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default Coin;
