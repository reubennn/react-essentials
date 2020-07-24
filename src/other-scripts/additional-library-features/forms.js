import React from "react";
import { render } from "react-dom";

class FavouriteColourForm extends React.Component {
  state = { value: "" }

  newColour = e =>
    this.setState({ value: e.target.value })

  submit = e => {
    console.log(`New Color: ${this.state.value}`);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label> Favourite Colour:
          <input
            type="color"
            onChange={this.newColour} />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}
render(
  <FavouriteColourForm />,
  document.getElementById("root")
)