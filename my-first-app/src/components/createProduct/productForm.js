import { useState } from "react";

function ProductForm(props) {
  // let [pName, updateName] = useState("");
  // let [pPrice, updatePrice] = useState("");
  // let [pDesc, updateDesc] = useState("");
  // let [pAvailability, updateAvailability] = useState(false);
  // let [pImage, updateImage] = useState("");

  // ++++ way of using single state +++++++
    let [userInput, updateUserInput] = useState({
      pName: "",
      pPrice: "",
      pDesc: "",
      pAvailability: "",
      pImage: "",
    });

    let nameInputHandler = (event) => {
      const {name,value} = event.target;
      // updateUserInput({ ...userInput, [name]:value }); //OR
      updateUserInput((preState) => {
        return { ...preState, [name]: value };
      });
    };

    let priceInputHandler = (event) => {
      const {name,value} = event.target;
     
      updateUserInput((preState) => {
        return { ...preState, [name]: value };
      });
    };

    let descInputHandler = (event) => {
      const {name,value} = event.target;
     
      updateUserInput((preState) => {
        return { ...preState, [name]: value };
      });
    };

    let imageInputHandler = (event) => {
      const {name,value} = event.target;
    
      updateUserInput((preState) => {
        return { ...preState, [name]: value };
      });
    };

    let availabilityInputHandler = (event) => {
      const {name,value} = event.target;
    
      updateUserInput((preState) => {
        return { ...preState, [name]: value };
      });
    };

  // let nameInputHandler = (event) => {
  //   updateName(event.target.value);
  // // };
  // let priceInputHandler = (event) => {
  //   updatePrice(event.target.value);
  // };
  // let descInputHandler = (event) => {
  //   updateDesc(event.target.value);
  // };
  // let availabilityInputHandler = (event) => {
  //   updateAvailability(event.target.value);
  // };
  // let imageInputHandler = (event) => {
  //   updateImage(event.target.value);
  // };

  let createEventProductHandler = (event) => {
    event.preventDefault();
    let product = {
      pId: 1,
      name: userInput.pName,
      desc: userInput.pDesc,
      image: userInput.pImage,
      isAvailable: Boolean(userInput.pAvailability),
      price: Number(userInput.pPrice),
    };
    

    // updateName("");
    // updatePrice("");
    // updateDesc("");
    // updateAvailability(false);
    // updateImage("");

    
    props.createProduct(product);
  };

  return (
    <form className="row g-3" onSubmit={createEventProductHandler}>
      <div className="col-md-6">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="pName"
          value={userInput.pName}
          placeholder="Product Name"
          onChange={nameInputHandler}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="price">Product Price</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="form-control"
          id="price"
          name="pPrice"
          value={userInput.pPrice}
          placeholder="Product Price"
          onChange={priceInputHandler}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Product Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="pDesc"
          value={userInput.pDesc}
          placeholder="Product Description"
          onChange={descInputHandler}
        />
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="isAvailable"
          name="pAvailability"
          value={userInput.pAvailability}
          onChange={availabilityInputHandler}
        />
        <label className="form-check-label" htmlFor="isAvailable">
          Is product available in stock?
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="select-image">Select product image</label>
        <input
          type="file"
          className="form-control"
          id="select-image"
          name ="pImage"
          value={userInput.pImage}
          onChange={imageInputHandler}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
    </form>
  );
}
export default ProductForm;
