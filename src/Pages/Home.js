import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Product from "../Components/Product";

const Home = () => {
  const [data, setData] = useState([]);
  const [category, SetCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  console.log(selectedCategory);

  console.log(category);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        console.error("Error ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => SetCategory(data));
  }, [category]);

 const filterdata= selectedCategory?data.filter((items)=>items.category===selectedCategory):data;

  return (
    <div className="container">
      <div className="select">
        
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Select a category</option>


          {category?.map((category, index) => (

            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        
      </div>

      {filterdata.map((item) => (
        <Product products={item} />
      ))}
    </div>
  );
};

export default Home;
