import React from "react";
import "./menu.css"
import {MDBBtn} from "mdbreact";

class Menu extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div>
            <MDBBtn color="primary">Primary</MDBBtn>
          </div>
        </nav>
      </header>
    )
  }
}

export default Menu;