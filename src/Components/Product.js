import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ products }) => {
  const { id, title, price, image } = products;
  console.log(title);
  const navigate = useNavigate();

  const handleclick = (id) => {
    console.log(id, "id");

    navigate(`/product/${id}`);
  };
  return (
    <div className="product">
      <div className="product_section">
        <img src={image} alt="" />
        <h1>{title}</h1>
        <h1>{price}</h1>
        <div>
          <button className="button_section" onClick={() => handleclick(id)}>
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
