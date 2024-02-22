let style = { padding: "25px" };

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

function Product(props) {
  return (
    <ul className="list-group shadow">
      {/* <li className="list-group-item">
        <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
          <div className="media-body order-2 order-lg-1" style={style}>
            <h5 className="mt-0 font-weight-bold mb-2 "> {props.name}</h5>
            <p className="font-italic text-muted mb-0 small">
              {" "}
              <span style={{ padding: "0px ,20px" }}>{props.desc}</span>
            </p>

          </div>
          <div className="ml-lg-5 order-1 order-lg-1">
            <h6 className="font-weight-bold my-2 "> {props.price} </h6>
            <button className="btn btn-primary buttonProperty ">
              Add to cart
            </button>
            <div className="d-flex align-items-center justify-content-between mt-1">
              {getBadge(props.isAvailable)}
            </div>
          </div>

          <img
            src={props.image}
            alt="No preview found"
            className="ml-lg-5 order-1 order-lg-1"
            width="150"
          />

        </div>
      </li> */}
      <li className = "list-group-item">
        <div className = "media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
          <div className="media-body order-2 order-lg-1" style={style}>
            <h5 className="mt-0 font-weight-bold mb-2 "> {props.name}</h5>
            <p className="font-italic text-muted mb-0 small"> <span style={{padding : '0px ,20px'}}>{props.desc}</span></p>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <h6 className="font-weight-bold my-2"> Rs.{props.price} </h6>
              <button className="btn btn-primary buttonProperty">Add to cart</button>
            {getBadge(props.isAvailable)}
            </div>
          </div>
          <img src={props.image} alt="No preview found" className="ml-lg-5 order-1 order-lg-1" width="150"/>
        </div>
      </li>
    </ul>
  );
}
export default Product;
