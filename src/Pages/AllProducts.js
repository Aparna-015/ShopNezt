import axios from "axios";
import React, {  useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
 import { CartContext } from "../Components/Context/Context";

const AllProducts = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  console.log(product,"products");
  
  useEffect(() => {
    if (id) {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)

        .then((res) => {
          setProduct(res.data);
        });
    } else {
      <div>
        <h1> No data found</h1>
      </div>;
    }
  }, [id]);


  const navigate =useNavigate()


  const handleAddToCart = () => {
    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 5,
        date: new Date().toISOString().split("T")[0], 
        products: [{ productId: product.id, quantity: 2}],
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("Added to Cart:", data);
      navigate("/cart"); 
    })
    .catch((error) => console.error("Error:", error));
};


    
  return (
    <div className="products">
      {product ? (
        <div className="main_section">
          <div className="sub_section">
            <div className="image_section">
  
              <img
                className="image_container"
                src={product?.image}
                alt=""
                width="
              300px"
              />
            </div>

            <div className="head_container">
             
              <h1 className="font-bold  mb-4">{product?.title}</h1>
              <h1>{product?.description}</h1>
              <h1 className="font-bold m-4">{product?.price}</h1>{" "}
            </div>
          </div>
          <button className="btnn1" onClick={()=>handleAddToCart()}>Add to cart</button>
        </div>
      ) : (
        <div>
          <h1>Product not found</h1>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
