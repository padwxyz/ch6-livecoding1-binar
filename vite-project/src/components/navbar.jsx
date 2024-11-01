import React from "react";

function Navbar2(props) {
    return (
    <div>
      <h1>Hello</h1>
      <ul>
        <li>{props.menu[0]}</li>
        <li>About</li>
        <li>{props.menu[2]}</li>
      </ul>
    </div>
    );
  }

  export default Navbar2;