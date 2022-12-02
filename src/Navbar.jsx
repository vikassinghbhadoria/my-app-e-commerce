import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style ">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              E-commerce
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {this.props.isLoggedIn == false ? (
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link"
                      // activeClassName="active"
                      // exact="true"
                    >
                      Login
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}

                {/* {this.props.isLoggedIn ? ( */}
                <li className="nav-item">
                  <NavLink
                    to="/cart"
                    className="nav-link"
                    // activeClassName="active"
                  >
                    Shopping cart
                  </NavLink>
                </li>
                {/* ) : (
                  ""
                )} */}

                {/* {this.props.isLoggedIn ? ( */}
                <li className="nav-item">
                  <NavLink
                    to="/customers"
                    className="nav-link"
                    // activeClassName="active"
                  >
                    Customers
                  </NavLink>
                </li>
                {/* ) : (
                  ""
                )} */}

                {/* <li className="nav-item">
                  <NavLink
                    to="/cart"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Shopping cart
                  </NavLink>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
export default Navbar;
