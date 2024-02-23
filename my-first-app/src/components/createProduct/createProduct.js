import ProductForm from "./productForm";

function CreateProduct(props) {

  function createProductHandler(product){
    props.createProduct(product);
  }
  return (
    <div className="row">
      <div className="col-lg-8 mx-auto form-bg">
        <ProductForm createProduct={createProductHandler}></ProductForm>
      </div>
    </div>
  );
}

export default CreateProduct;
