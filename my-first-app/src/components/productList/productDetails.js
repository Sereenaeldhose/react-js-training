import { useState } from "react";
import Button from "./button";

let getBadge = (isAvailable) =>
  isAvailable ? (
    <span className="badge bg-success" style={{ marginLeft: "40px" }}>
      Available
    </span>
  ) : (
    <span className="badge bg-danger" style={{ marginLeft: "40px" }}>
      Out of stock
    </span>
  );

function ProductDetails(props) {
  let [productCount, updateCount] = useState(0);
  let [disableDecrement, updateClassDecrement] = useState("");
  let [disableIncrement, updateClassIncrement] = useState("");

  let needToDisable = (isAvailable) => {
    let classBtn = "btn btn-primary addBtn ";
    return (classBtn += isAvailable ? "" : "disabled-button");
  };

  let decrementProductionCount = () => {
    updateCount(productCount > 0 ? --productCount : 0);
    if (productCount < 10 && productCount > 0) {
      updateClassIncrement("");
      updateClassDecrement("");
      return;
    }
    return updateClassDecrement("disabled-button");
  };

  let incrementProductionCount = () => {
    updateCount(productCount < 10 ? ++productCount : 10);
    if (productCount < 10 && productCount > 0) {
      updateClassIncrement("");
      updateClassDecrement("");
      return;
    }
    return updateClassIncrement("disabled-button");
  };

  return (
    <div className="d-flex align-items-center justify-content-between mt-1">
      <h6 className="font-weight-bold my-2"> Rs.{props.price} </h6>
      <Button
        class_name={`btn btn-danger minus-btn ${disableDecrement}`}
        eventHandler={decrementProductionCount}
      >
        -
      </Button>
      {productCount}
      <Button
        class_name={`btn btn-danger plus-btn ${disableIncrement}`}
        eventHandler={incrementProductionCount}
      >
        +
      </Button>
      <h6 className="font-weight-bold my-2">
        {" "}
        Total: {props.price * productCount}{" "}
      </h6>
      <button className={needToDisable(props.isAvailable)}>Add to cart</button>
      {getBadge(props.isAvailable)}
    </div>
  );
}

export default ProductDetails;
