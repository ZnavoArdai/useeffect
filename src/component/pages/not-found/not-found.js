import React    from "react";
import template from "./not-found.jsx";

class Hola extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Hola;
