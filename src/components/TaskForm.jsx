import React from 'react';

class TaskForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    console.log(`New task: ${title}`);
    e.target.reset();
  };

  render() {
    return (
      <div>
        <h2>Add Task</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" placeholder="Enter task title" />
          <button data-testid="button" type="submit">Add Task</button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
