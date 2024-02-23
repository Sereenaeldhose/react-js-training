import { useState } from "react";
import Product from "./product";

let products = [
    {
      pId: 1,
      name: "Fresh Milk",
      desc: "Pure Cow Milk directly sourced from farmers every morning.It is highly demandable product will be out of stock fastly",
      image: require("../../images/milk.jpeg"),
      isAvailable: true,
      price: 32,
    },
    {
      pId: 2,
      name: "Egg",
      desc: "Pack of 30 eggs directly sourced from farmers every morning.It is highly demandable product will be out of stock fastly",
      image: require("../../images/egg.jpeg"),
      isAvailable: false,
      price: 32,
    },
    {
      pId: 3,
      name: "Vegetables",
      desc: "Fresh Vegetables directly sourced from farmers every morning.It is highly demandable product will be out of stock fastly",
      image: require("../../images/vegies.jpeg"),
      isAvailable: true,
      price: 32,
    },
    {
      pId: 4,
      name: "Fruits",
      desc: "Fresh Fruits directly sourced from farmers every  morning. It is  highly demandable product will be out of stock fastly",
      image: require("../../images/fruits.jpeg"),
      isAvailable: true,
      price: 32,
    },
  ];

  function ProductList (props){
  return (

    <div className="row">
      <div className="col-lg-8 mx-auto">
      <ul className="list-group shadow">

{products.map(product =>{
  return <Product
   id={products.pId}
   name={product.name}
   desc={product.desc}
   image={product.image}
   isAvailable={product.isAvailable}
   price={product.price}
 ></Product>
})}


        {/* <Product
          id={products[1].pId}
          name={products[1].name}
          desc={products[1].desc}
          image={products[1].image}
          isAvailable={products[1].isAvailable}
          price={products[1].price}
        ></Product>
        <Product
          id={products[2].pId}
          name={products[2].name}
          desc={products[2].desc}
          image={products[2].image}
          isAvailable={products[2].isAvailable}
          price={products[2].price}
        ></Product>
        <Product
          id={products[3].pId}
          name={products[3].name}
          desc={products[3].desc}
          image={products[3].image}
          isAvailable={products[3].isAvailable}
          price={products[3].price}
        ></Product> */}
        </ul>
      </div>
    </div>
  );
  }

  export default ProductList;