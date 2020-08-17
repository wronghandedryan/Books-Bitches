/* jshint ignore:start */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 70)
    {
      newState.open = false;
    }

    this.setState(newState);
  }
  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark mb-2">
          Google Books Reading List
        <div className="navi">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/AddedDB" ? "nav-link active" : "nav-link"}
                to="/AddedDb"
              >
                Books On Reading List
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
};

export default Nav;
