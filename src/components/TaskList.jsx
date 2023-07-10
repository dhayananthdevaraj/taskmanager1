import React from 'react';

function TaskList() {
  return (
    <div>
      <h2>Task List</h2>
      <ul data-testid = "Unlist">
        <li>
          <span>Task 1</span>
          <button>Delete</button>
          <button>Complete</button>
        </li>
        <li>
          <span>Task 2</span>
          <button>Delete</button>
          <button>Complete</button>
        </li>
      </ul>
    </div>
  );
}

export default TaskList;