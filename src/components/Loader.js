import React from 'react';
import Gif from "./../gif/Loader.gif";

 const Loader = () => {
     return ( 
         <>
         <img src={Gif} alt="Loader" />
         {/* <h2 style={{color: "white"}}>Loading ...</h2> */}
         </>
      );
 }
  
 export default Loader;