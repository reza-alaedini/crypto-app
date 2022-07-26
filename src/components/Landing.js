import React, { useEffect, useState } from "react";

//API
import { getCoins } from "../services/Api";

//Style
import styles from "./Landing.module.css";

// Components
import Loader from "./Loader";
import Coin from "./Coin";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoins();
      // console.log(data);
      setCoins(data);
    };
    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchHandler}
        className={styles.search}
      />
      <br />

      {coins.length ? (
        <div>
          {searchedCoins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              symbol={coin.symbol}
              image={coin.image}
              price={coin.current_price}
              marketCap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
