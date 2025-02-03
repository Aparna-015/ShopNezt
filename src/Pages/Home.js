import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Components/Product";

const Home = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
     
     {data.map((item)=>(
    
    <Product products={item}/>


    ))}
  
    </div>
  );
};

export default Home;
