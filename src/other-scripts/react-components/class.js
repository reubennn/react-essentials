import React, { Component } from "react";
import ReactDOM from "react-dom";

// Must use a capital letter
class Message extends React.Component {
  render() {
    // Render JSX elements in parenthesis
    return (
      <div>
        <h1 style={{color: this.props.color}}>
          {this.props.msg}
        </h1>
        <p>I'll check back in {this.props.minutes} minutes</p>
      </div>
    )
  }
}

ReactDOM.render(
  // Boolean and numbers need to be passed in {} for JSX
  <Message color="blue" msg="How are you?" minutes={5}/>,
  document.getElementById("root")
);

let style = {
  backgroundColor: "orange",
  color: "white",
  fontFamily: "Arial"
};