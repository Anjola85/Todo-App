// Purpose is to add todo to the list
// container component, since it deals with CRUD
// it will have a different layout cause of its purpose
import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: "",
  };

  // function updates content above to the input of the user
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  // resets the content
  handleSubmit = (e) => {
    e.preventDefault();
    // pass the input from user to addTodo function
    this.props.addTodo(this.state);
    this.setState({
      content: "",
    });
  };
  // layout(JSX) is integrates a form to add TODO
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
