import React from "react";

class TodosListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  renderTaskSection() {
    const { task, isCompleted } = this.props;

    const taskStyle = {
      color: isCompleted ? "green" : "red",
      fontStyle: isCompleted ? "italic" : "normal",
      cursor: "pointer"
    };

    return (
      <td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>
        {task}
      </td>
    );
  }

  renderActionsSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }

    return (
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button>Delete</button>
      </td>
    );
  }

  onEditClick() {
    const currEditState = this.state.isEditing;
    this.setState({ isEditing: true });
  }

  onCancelClick() {
    const currEditState = this.state.isEditing;
    this.setState({ isEditing: false });
  }

  onSaveClick() {
    const currEditState = this.state.isEditing;
    this.setState({ isEditing: true });
  }

  render() {
    return (
      <tr>
        {this.renderTaskSection()}
        {this.renderActionsSection()}
      </tr>
    );
  }
}

export default TodosListItem;
