import React from "react";
import CreateTodo from "./create-todo";
import TodosList from "./todos-list";

const todos = [
  {
    task: "make React tutorial",
    isCompleted: false
  },
  {
    task: "eat dinner",
    isCompleted: true
  },
  {
    task: "review React and Webpack",
    isCompleted: true
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  }

  createTask(task) {
    {
      /*tutorial way
    
    this.state.todos.push({
    task,
    isCompleted: false
    });
    this.setState({todos: this.state.todos});
     */
    }

    const currToDos = { ...this.state.todos };
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos });
  }

  render() {
    return (
      <div>
        <h2>Rendering from App.</h2>
        <CreateTodo createTask={this.createTask.bind(this)} />
        <TodosList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
