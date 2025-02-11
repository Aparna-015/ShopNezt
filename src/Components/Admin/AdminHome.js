import React, { useEffect, useState } from "react";

const AdminHome = () => {
  const [products, setProducts] = useState([]);
  console.log(products,"products");

  const [title, setTitle] = useState("");
  console.log(title);
  
  const [price,setPrice] = useState("");
  const [description,setDescription] = useState("");
  const [image,setImage] = useState("");
  const [category,setCategory] = useState("");

  const handleAddProduct=()=>{

        fetch("https://fakestoreapi.com/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            price: parseFloat(price),
            description,
            image,
            category,
          }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((error) => console.error("Error:", error));
          
     

  }


  return (
    <div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Description: </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Image URL: </label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div>
        <label>Category: </label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AdminHome;
