import React from "react";
import "./logoZone.css"
import Logo from "./logo/logo";

class LogoZone extends React.Component {
  render() {
    return (
      <div>
        <Logo href={"test"}/>
        <p>Logo zone</p>
      </div>
    )
  }
}

export default LogoZone;