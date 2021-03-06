import React from "react";
import CreateTodo from "./create-todo";
import TodosList from "./todos-list";

const todos = [
  {
    task: "Complete React tutorial",
    isCompleted: false
  },
  {
    task: "Run daily mile",
    isCompleted: true
  },
  {
    task: "Review React and Webpack",
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

  toggleTask(task) {
    {
      /*tutorial uses find in lodash. probably could use filter method of arrays*/
    }
    const foundTodo = _.find(this.state.todos, todo => todo.task == task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos });
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task == oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(taskToDelete) {
    const currToDos = { ...this.state.todos };
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({ todos: this.state.todos });
  }

  render() {
    return (
      <div>
        <h2>Tasks to Do App</h2>
        <CreateTodo
          todos={this.state.todos}
          createTask={this.createTask.bind(this)}
        />
        <TodosList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  }
}

export default App;
