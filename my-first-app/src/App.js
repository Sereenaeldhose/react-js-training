import "./App.css";
import ProductList from "./components/productList/productList";
import CreateProduct from "./components/createProduct/createProduct";
import { useState } from "react";

function App() {
  let [newProduct,addProduct] = useState(null);

  function createProductHandler(product){
   addProduct(product);
  }
  
  return (
    <div>
      <CreateProduct createProduct={createProductHandler} ></CreateProduct>
      <ProductList newProduct={newProduct}></ProductList>
    </div>
  );
}

export default App;
