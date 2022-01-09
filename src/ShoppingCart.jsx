import React, { Component } from "react";
import Product from "./Product";
// import Navbar from "./Navbar";

export default class ShoppingCart extends Component {
  // executes when the object is mounted
  constructor(props) {
    // initialization of the state

    super(props);
    this.state = {
      products: [
        { id: 1, productName: "phone", prices: 1000, quantity: 0 },
        { id: 2, productName: "camera", prices: 2000, quantity: 0 },
        { id: 3, productName: "Led tv", prices: 3000, quantity: 0 },
        { id: 4, productName: "ipad", prices: 4000, quantity: 0 },
        { id: 5, productName: "ssd 1 tb", prices: 5000, quantity: 0 },
        { id: 6, productName: "xbox", prices: 6000, quantity: 0 },
      ], 
    };
  }
  render() {
    return (
      <div>
        <h4>Shopping cart </h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                id={prod.id}
                product={prod}
                productName={prod.productName}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  // render ends here

  // executes after constructor and render method (includes life cycle of child componenet\s,( if any ) of current component
  componentDidMount= async()=> {
    // fetch data from data source

    var response  = await fetch("http://localhost:5000/products", { method: "GET" });
     var prods= await response.json();  
    console.log(prods);

    this.setState({products:prods});
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate-shoppingcart",
      prevProps,
      prevState,
      this.props,
      this.state
    );
    // if (prevProps.x != this.props.x) {
    //   //make http call
    // }
  }
  componentWillUnmount() {
    console.log("wilunMount-shappingcart");
  }

  componentDidCatch(error, info) {
    console.log("componentdodcatch-shoppingcart");
    console.log(error, info);

    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  handleIncrement = (product, maxValue) => {
    console.log("hadleIncrement", product);
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      this.setState({ products: allProducts });
    }
  };

  handleDecrement = (product, minValue) => {
    console.log("hadleDeccrement", product);
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      this.setState({ products: allProducts });
    }
  };
  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure you wanna delete ?")) {
      allProducts.splice(index, 1);
      this.setState({ products: allProducts });
    }
  };
}
