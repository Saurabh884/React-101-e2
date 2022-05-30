import React, { useEffect } from "react";
import AddProduct from "./AddProduct";
import { useState } from "react";
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;
  let [showData , setShowData] = useState([])
  useEffect(() =>{
    const getData = async () =>{
      let response = await fetch("http://localhost:8080/products");
      let data = await response.json();
      console.log(data);
      setShowData(data)
    }
    getData()
  },[])

  return (
      
    <>
    <AddProduct />
    <Flex>
      {/*  AddProduct */}
      <Grid>{/* List of Products */}</Grid>
      {/* Pagination */}
    </Flex>
    {showData.map((el) =>{
      return <div key={showData.id}>
        <img src={el.imageSrc} alt="" />
        <div>{el.title}</div>
        <div>{el.category}</div>
        <div>{el.gender}</div>
        <div>{el.price}</div>
      </div>
    })}
    </>
  );
};

export default Products;
