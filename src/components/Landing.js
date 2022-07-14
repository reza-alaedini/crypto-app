import React, { useEffect, useState } from "react";

//API
import { getCoins } from "../services/Api";

// Components
import Loader from "./Loader";

const Landing = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoins();
      console.log(data);
      setCoins(data);
    };
    fetchAPI();
  }, []);

  return (
    <>
      <input type="text" placeholder="Search" />
      <br />

      {coins.length ? (
        <div>
          {coins.map((coin) => (
            <p key={coin.id} style={{color: "white"}}>{coin.name}</p>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
