import React from "react";
import _ from "lodash";

class CreateTodo extends React.Component {
  /*internal state of this component. usually keep state in the app.js file and pass down to child components*/

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  handleCreate(event) {
    event.preventDefault();
    const createInput = this.refs.createInput;
    const task = createInput.value;

    const validateInput = this.validateInput(task);
    if (validateInput) {
      this.setState({ error: validateInput });
      return;
    }

    this.setState({ error: null });
    this.props.createTask(task);
    this.refs.createInput.value = "";
  }

  validateInput(task) {
    if (!this.state.error) {
      return null;
    } else {
      return (
        <div style={{ color: "red" }}>
          {this.state.error}{" "}
        </div>
      );
    }
  }

  renderError() {}

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input
          type="text"
          placeholder="What do I need to do"
          ref="createInput"
        />
        <button>Create</button>
        {this.renderError()}
      </form>
    );
  }
}

export default CreateTodo;
