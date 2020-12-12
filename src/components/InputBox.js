import React from "react";

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
    event.preventDefault();
  }

  handleSubmit(event) {
    if (this.state.input === "" ) {
      alert("Please enter a valid task")
    } else {
      event.preventDefault();
      this.props.handleNewTask(this.state.input);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            id="input"
            placeholder="Enter your task here"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default InputBox;