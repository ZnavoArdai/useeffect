import React    from "react";
import template from "./header.jsx";

class Header extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Header;
