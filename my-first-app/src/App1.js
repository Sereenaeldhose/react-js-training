import "./App.css";

function App1() {
  return (
    <div className="row">
        <div className="col-lg-2 mx-auto"></div>
      <div className="col-lg-4 mx-auto">
        <div className="allproduct">
          <h1 className="text">All Products</h1> 
          <img src={require("./images/all.jpeg")} alt="No preview found" className="ml-lg-5 order-1 order-lg-1" width="500" height="100"/>
        </div>
      </div>
      <div className="col-lg-2 mx-auto"></div>
    </div>
  );
}
export default App1;
