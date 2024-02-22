import "./App.css";
import Product from "./components/product";

function App() {
  // let msg = "Hey!"
  // return <div className="mydiv">
  //   <h1 className="myheader">{msg} This is my first app component</h1><p className="mypara">And This is my first paragraph</p>
  // </div>;

  let products = [
    {
      pId: 1,
      name: "Fresh Milk",
      desc: "Pure Cow Milk directly sourced from farmers every morning.It is highly demandable product will be out of stock fastly",
      image: require("./images/milk.jpeg"),
      isAvailable: true,
      price: 32,
    },
    {
      pId: 2,
      name: "Egg",
      desc: "Pack of 30 eggs directly sourced from farmers every morning.It is highly demandable product will be out of stock fastly",
      image: require("./images/egg.jpeg"),
      isAvailable: false,
      price: 32,
    },
    {
      pId: 3,
      name: "Vegetables",
      desc: "Fresh Vegetables directly sourced from farmers every morning.It is highly demandable product will be out of stock fastly",
      image: require("./images/vegies.jpeg"),
      isAvailable: true,
      price: 32,
    },
    {
      pId: 4,
      name: "Fruits",
      desc: "Fresh Fruits directly sourced from farmers every  morning. It is  highly demandable product will be out of stock fastly",
      image: require("./images/fruits.jpeg"),
      isAvailable: true,
      price: 32,
    },
  ];

  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <Product
          id={products[0].pId}
          name={products[0].name}
          desc={products[0].desc}
          image={products[0].image}
          isAvailable={products[0].isAvailable}
          price={products[0].price}
        ></Product>

        <Product
          id={products[1].pId}
          name={products[1].name}
          desc={products[1].desc}
          image={products[1].image}
          isAvailable={products[1].isAvailable}
          price={products[1].price}
        ></Product>
        <Product
          id={products[2].pId}
          name={products[2].name}
          desc={products[2].desc}
          image={products[2].image}
          isAvailable={products[2].isAvailable}
          price={products[2].price}
        ></Product>
        <Product
          id={products[3].pId}
          name={products[3].name}
          desc={products[3].desc}
          image={products[3].image}
          isAvailable={products[3].isAvailable}
          price={products[3].price}
        ></Product>
      </div>
    </div>
  );
}

export default App;
