import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar bg-danger navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
            <hr className="bg-primary m-1" />
          </a>
        </div>
      </nav>
    </div>
  );
}
