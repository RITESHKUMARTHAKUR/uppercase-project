import React, { useState } from "react";
import "./Texttransform.css";
import { db } from "../../firebase";

export default function Texttransform(props) {
  const Upclick = () => {

    let newtext = text.toUpperCase();
    setText(newtext);
    db.collection("ritesh").add({
      name: newtext,
      date: new Date () ,
    });
    //window.location.reload();

  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const clearSection = () => {
    setText(" ");
  };

  // <!- This is State --- use state is the hook here -->
  // the value of text is enter text here
  // we can change the value by using setText

  const [text, setText] = useState(" ");

  return (
    <div className="box mb-3 my-5">
      <h1>{props.heading}</h1>
      <textarea
        className="form-control border-2"
        value={text}
        onChange={handleOnchange}
        id="box"
        rows="6"
      ></textarea>
      <button className="insert btn btn-primary my-3 pd-8" onClick={Upclick}>
        Convert to uppercase
      </button>
      <button className="btn ms-3 colrs pd-8 " onClick={clearSection}>
        Clear
      </button>
      <div className="footer  bg-danger position-relative">
        <p className="footer-name fixed-bottom">
          Developed By - Ritesh ❤🧡❤
        </p>
      </div>
    </div>
  );
}
