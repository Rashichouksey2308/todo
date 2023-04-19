import React, { useEffect, useState } from "react";


const Fetchdata = () => {
  
  const [data, setdata] =useState([]);

  useEffect(()=>{
          fetch("https://fakestoreapi.com/products").
          then((responce) =>responce.json())
      .then((resp) =>setdata(resp));
  },[])

  return (
    <>
      <h1>hello</h1>
 
          {data.map((item)=>(
            <p>{item.price}</p>
           ))}
    </>
  );
};
export default Fetchdata;
