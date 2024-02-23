import "./App.css";
import ProductList from "./components/productList/productList";
import CreateProduct from "./components/createProduct/createProduct";

function App() {
  return (
    <div>
      <CreateProduct></CreateProduct>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
