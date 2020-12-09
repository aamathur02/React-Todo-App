import React from "react";

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: " Enter your task here" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
    event.preventDefault();
  }

  handleSubmit(event) {
    this.props.handleNewTask(this.state.input);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
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