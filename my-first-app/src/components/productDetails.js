let getBadge = (isAvailable) =>
  isAvailable ? (
    <span className="badge bg-success" style={{ "margin-left": "40px" }}>
      Available
    </span>
  ) : (
    <span className="badge bg-danger" style={{ "margin-left": "40px" }}>
      Out of stock
    </span>
  );
let productCount = 0;
let getProductCount = () => {
  return productCount === 0 ? "select" : productCount;
};

let needToDisable = (isAvailable) => {
   let classBtn = "btn btn-primary addBtn ";
   classBtn +=  isAvailable? "":"disabled-button";
   console.log("classBtn = "+ classBtn);
   return classBtn;
};

function ProductDetails(props) {
  return (
    <div className="d-flex align-items-center justify-content-between mt-1">
      <h6 className="font-weight-bold my-2"> Rs.{props.price} </h6>
      <button className="btn btn-danger minus-btn">-</button>
      {getProductCount()}
      <button className="btn btn-warning plus-btn">+</button>
      <button className={needToDisable(props.isAvailable)}>Add to cart</button>
      {getBadge(props.isAvailable)}
    </div>
  );
}

export default ProductDetails;
