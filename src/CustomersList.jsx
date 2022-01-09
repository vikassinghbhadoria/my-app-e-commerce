import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "vikas",
        phone: "111 - 111",
        address: { city: "gwalior" },
        photo: "https://picsum.photos/id/101/60",
      },
      {
        id: 2,
        name: "harsh",
        phone: "222 - 222",
        address: { city: "indore" },
        photo: "https://picsum.photos/id/102/60",
      },
      {
        id: 3,
        name: "rishabh",
        phone: "333 - 333",
        address: { city: "bulandshahar" },
        photo: "https://picsum.photos/id/103/60",
      },
      {
        id: 4,
        name: "pratyush",
        phone: "444 - 444",
        address: { city: "rewa" },
        photo: "https://picsum.photos/id/104/60",
      },
      {
        id: 5,
        name: "john",
        phone: null,
        address: { city: "london" },
        photo: "https://picsum.photos/id/1051/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary">
            {this.state.customersCount}
          </span>
          <button
            className="badge bg-info text-dark"
            onClick={this.onRefreshClick}
          >
            Refresh
          </button>
        </h4>

        <table className="table  table-hover table-success table-stripted">
          <thread>
            <th>#</th>
            <th>customer name</th>
            <th>phone</th>
            <th>city</th>
          </thread>

          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  // Executes when user clic Refresh button
  onRefreshClick = () => {
    // console.log("RefreshClicked");
    this.setState({
      customersCount: 7,
    });
  };

  getPhoneToRender = (cust) => {
    return cust.phone == null ? (
      <div className="bg-warning p-2 text-center">no phone</div>
    ) : (
      cust.phone
    );
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust,index) => {
      return (
        <tr key={cust.id}>
          <td>
            <img src={cust.photo} alt="customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary mt-3"
                onClick={() => {
                  this.onChangePictureClick(cust,index);
                }}
              >
                change picture
              </button>
            </div>
          </td>
          <td>{cust.id}</td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };

  onChangePictureClick = (cust,index) => {
    console.log(cust);
    console.log(index);
     var custArr=this.state.customers;
     custArr[index].photo="data:image/png;base64,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"
    this.setState({customers:custArr})

  };

}
