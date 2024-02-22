import { Badge } from "react-bootstrap";

let style = {padding : '25px'};
let isAvailable = "Available";


 let badgeVariant = isAvailable === "Available" ?  'success' : 'danger';



function Product() {
  return (
    <ul className="list-group shadow">
      <li className = "list-group-item">
        <div className = "media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
          <div className="media-body order-2 order-lg-1" style={style}>
            <h5 className="mt-0 font-weight-bold mb-2 "> Fresh Milk</h5>
            <p className="font-italic text-muted mb-0 small"> <span style={{padding : '0px ,20px'}}>Currently no description is available for this product</span></p>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <h6 className="font-weight-bold my-2"> Rs.32 </h6>
              <button className="btn btn-primary buttonProperty">Add to cart</button>
              <Badge variant={badgeVariant}>{isAvailable}</Badge>
            </div>
          </div>
          <img src={require("../images/milk.jpeg")} alt="No preview found" className="ml-lg-5 order-1 order-lg-1" width="150"/>
        </div>
      </li>
      
      <li className = "list-group-item">
        <div className = "media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
          <div className="media-body order-2 order-lg-1" style={style}>
            <h5 className="mt-0 font-weight-bold mb-2 "> Eggs</h5>
            <p className="font-italic text-muted mb-0 small"> <span style={{padding : '0px ,20px'}}>A pack of 30 eggs direclty collected from farmers </span></p>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <h6 className="font-weight-bold my-2"> Rs.230  </h6>
              <button className="btn btn-primary buttonProperty">Add to cart</button>
               <Badge variant={badgeVariant}>{isAvailable}</Badge>
            </div>
          </div>
          <img src={require("../images/egg.jpeg")} alt="No preview found" className="ml-lg-5 order-1 order-lg-1" width="200"/>
        </div>
      </li>
    </ul>
  );
}
export default Product;
