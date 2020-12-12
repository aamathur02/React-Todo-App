import React from "react";
import InputBox from "./InputBox.js";
import "../stylesheets/Container.css"
import Title from "./Title.js";
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
    const listItems = this.state.taskList.map((task) => <li class="list-items" onClick={() => this.handleItemDelete(task.key)}>{task.text}</li>);
    return (
      <div><Title/>
        <InputBox handleNewTask={this.handleNewTask} />
        <div class="todoListMain"><ul class="list" >{listItems}</ul></div>
        
      </div>
    );
  }
}

export default Container;
