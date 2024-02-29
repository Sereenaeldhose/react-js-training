import Product from "./product";

function ProductList(props) {
  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <ul className="list-group shadow">
          {props.newProductList.map((product) => {
            return (
              <Product
                key={product.pId}
                id={product.pId}
                name={product.name}
                desc={product.desc}
                image={product.image}
                isAvailable={product.isAvailable}
                price={product.price}
              ></Product>
            );
          })}

          {/* <Product
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
        ></Product> */}
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
