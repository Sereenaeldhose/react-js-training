import "./App.css";
import Product  from "./components/product";

function App() {
  // let msg = "Hey!"
  // return <div className="mydiv">
  //   <h1 className="myheader">{msg} This is my first app component</h1><p className="mypara">And This is my first paragraph</p>
  // </div>;

  return (<div className="row">
    <div className="col-lg-8 mx-auto">
    <Product></Product>
    </div>
  </div>)
}

export default App;
