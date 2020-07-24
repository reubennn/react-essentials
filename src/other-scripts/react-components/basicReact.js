import React, { Component } from "react";
import ReactDOM from "react-dom";

/*
Create React element takes 3 arguments:
1. Type of element to create
2. Attributes to provide
3. Display child elements
*/
const title = React.createElement(
  "h1",
  {id: "title", className: "header", style: style},
  "Hello, World!"
);

/*
We need to render our react elements
1. What element to render
2. Where do we want to render this?
*/
ReactDOM.render(
  title,
  document.getElementById("root")
);

/*
Use JSX attribute syntax
*/
ReactDOM.render(
  <div style={style}>
    <h1 id="heading-element">Hello, World!</h1>
    <p>We're glad you're here.</p>
  </div>,
  document.getElementById("root")
);