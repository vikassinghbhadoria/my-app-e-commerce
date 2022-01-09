import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    console.log("constructor-product ");
    this.state = {
      product: this.props.product,
    };
  }

  render() {
    console.log("render-product");
    return (
      
      <div className="col-lg-6">
        <div className="card m-2 ">
          <div className="card-body ">
            <div className="text-muted"># {this.state.product.id}</div>
            <span
              className="float-end"
              className="hand-icon"
              onClick={() => {
                this.props.onDelete(this.state.product);
              }}
            >
              <i className="fa fa-times"></i>
            </span>

            <h5 className="pt-5 border-top">
              {this.state.product.productName}
            </h5>
            <div>$ {this.state.product.prices}</div>
            {/* // card body end here */}

            <div className="card-footer text-right">
              <div className="float-start">
                <span className="badge bg-primary m-2">
                  {this.state.product.quantity}
                </span>
                <div className="btn-group">
                  <button
                    className="btn btn-outline-success"
                    onClick={() => {
                      this.props.onDecrement(this.state.product, 0);
                    }}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => {
                      this.props.onIncrement(this.state.product, 10);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="float-end">{this.props.children}</div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }

  componentDidMount() {
    console.log("didmount-product");
  }
  componentDidUpdate() {
    console.log("didupdate-product");
  }
  // executes when the current instance of current coponent is being deleted from memory
  componentWillUnmount() {
    console.log("will unmount-product");
  }
}
