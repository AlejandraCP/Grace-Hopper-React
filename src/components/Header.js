import React, { Component } from "react";
import { render } from "react-dom";

import "../../public/build/js/index.css";


class Header extends Component {
  render() {
    return (
      <header className="">
      <h1>Grace Murray Hopper</h1>
      <hr></hr>
      </header>
    );
  }
}

export default Header;