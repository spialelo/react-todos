import React from "react";

class CreateTodo extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="What do I need to do" />
        <button>Create</button>
      </form>
    );
  }
}

export default CreateTodo;
