import React from "react";

export default function Navbar(props) {
  const styleHr = {
    height: "4px",
    width: "100%",
    // backgroundColor: "#0d6efd"
    backgroundColor: "#DC143C"
    // backgroundColor: "#F00"
  }
  return (
    <div>
      <nav className="navbar bg-danger navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
            <hr className="m-1 " style={styleHr} />
          </a>
        </div>
      </nav>
    </div>
  );
}
