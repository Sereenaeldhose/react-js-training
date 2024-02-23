import ProductDetails from "./productDetails";

let style = { padding: "25px" };

function Product(props) {
  return (
    <li className="list-group-item">
      <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
        <div className="media-body order-2 order-lg-1" style={style}>
          <h5 className="mt-0 font-weight-bold mb-2 "> {props.name}</h5>
          <p className="font-italic text-muted mb-0 small">
            <span style={{ padding: "0px ,20px" }}>{props.desc}</span>
          </p>
          <ProductDetails price={props.price} isAvailable={props.isAvailable} />
        </div>
        <img
          src={props.image}
          alt="No preview found"
          className="ml-lg-5 order-1 order-lg-1"
          width="200"
          style={style}
        />
      </div>
    </li>
  );
}
export default Product;
