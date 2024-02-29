import "./App.css";
import ProductList from "./components/productList/productList";
import CreateProduct from "./components/createProduct/createProduct";
import { useState } from "react";




let products = [
  {
    pId: 1,
    name: "Fresh Milk",
    desc: "Pure Cow Milk directly sourced from farmers every morning.It is highly demandable product will be out of stock fastly",
    image: require("./images/milk.jpeg"),
    isAvailable: true,
    price: 32,
  },
  {
    pId: 2,
    name: "Egg",
    desc: "Pack of 30 eggs directly sourced from farmers every morning.It is highly demandable product will be out of stock fastly",
    image: require("./images/egg.jpeg"),
    isAvailable: false,
    price: 32,
  },
  {
    pId: 3,
    name: "Vegetables",
    desc: "Fresh Vegetables directly sourced from farmers every morning.It is highly demandable product will be out of stock fastly",
    image: require("./images/vegies.jpeg"),
    isAvailable: true,
    price: 32,
  },
  {
    pId: 4,
    name: "Fruits",
    desc: "Fresh Fruits directly sourced from farmers every  morning. It is  highly demandable product will be out of stock fastly",
    image: require("./images/fruits.jpeg"),
    isAvailable: true,
    price: 32,
  },
];


function App() {
  let [newProductList,updateProductList] = useState(products);

  function createProductHandler(product){
    product.pId = newProductList.length + 1;
   updateProductList([product, ...newProductList]);
  }
  
  return (
    <div>
      <CreateProduct createProduct={createProductHandler} ></CreateProduct>
      <ProductList newProductList={newProductList}></ProductList>
    </div>
  );
}

export default App;
