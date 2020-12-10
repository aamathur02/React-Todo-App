import React from "react";
import InputBox from "./InputBox.js";
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskList: [] };
    this.handleNewTask = this.handleNewTask.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  handleNewTask(item) {
    var newTask=  {
      text: item,
      key: Date.now()
    };
    this.setState({ taskList: this.state.taskList.concat(newTask) });
  }

  
  handleItemDelete(key) {
    //alert(key);
    var filteredItems = this.state.taskList.filter(function (task) {
      return (task.key !== key);
    });
   
    this.setState({
      taskList: filteredItems
    });
  }
  
 
  render() {
    const listItems = this.state.taskList.map((task) => <li onClick={() => this.handleItemDelete(task.key)}>{task.text}</li>);
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
