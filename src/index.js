import React from "react";
import ReactDOM from "react-dom";

const lname = "Khare";

ReactDOM.render(
  <div>
    <h2>Hello Yash {lname}</h2>
    <ul>
      <li>hello1</li>
      <li>hello2</li>
      <li>hello3</li>
    </ul>

    <ol>
      <li>hello1</li>
      <li>hello1</li>
      <li>hello1</li>
    </ol>
  </div>,

  document.getElementById("content")
);

/* React Code for paragraph  */

const number = 7;

ReactDOM.render(
  <p>Your Lucky no is : {number} </p>,
  document.getElementById("paragraph")
);
