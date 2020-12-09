import React from "react";
import InputBox from "./InputBox.js";
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskList: [] };
    this.handleNewTask = this.handleNewTask.bind(this);
  }

  handleNewTask(item) {
    this.setState({ taskList: this.state.taskList.concat(item) });
  }

  render() {
    const listItems = this.state.taskList.map((task) => <li>{task}</li>);
    return (
      <div>
        <InputBox handleNewTask={this.handleNewTask} />
        <button onClick={() => this.handleNewTask("item")}> Click Here </button>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default Container;
