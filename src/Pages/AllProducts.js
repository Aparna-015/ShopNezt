import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const AllProducts = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

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

  const handleAddToCart=(id)=>{

    console.log(id,"cartid");
    
  navigate(`/cart`)
  }
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
