import React from 'react';
import { render ,screen } from '@testing-library/react';
import TaskForm from '../src/components/TaskForm';
import TaskList from '../src/components/TaskList';

describe('TaskManager', () => {
  // TaskForm test cases
  describe('TaskForm', () => {
    test('taskform_is_a_class_component', () => {
      expect(TaskForm.prototype instanceof React.Component).toBe(true);
    });
    test('renders_button_element' ,()=> {
      render(<TaskForm/>);
      const buttonId = screen.getByTestId("button");
      expect(buttonId).toBeInTheDocument()

    });

  });

  // TaskList test cases
  describe('TaskList', () => {
    test('tasklist_is_a_functional_component', () => {
      expect(typeof TaskList).toBe('function');
    });

    test('taskList_is_not_an_instance_of_react_component', () => {
      expect(TaskList.prototype instanceof React.Component).toBe(false);
    });

    test('tasklist_renders_the_correct_task_list', () => {
      const { getByText } = render(<TaskList />);
      expect(getByText('Task 1')).toBeInTheDocument();
      expect(getByText('Task 2')).toBeInTheDocument();
    });

    test('tasklist_renders_the_task_list_as_an_unordered_list_ul', () => {
      const { container } = render(<TaskList />);
      const ulElement = container.querySelector('ul');
  
      expect(ulElement).toBeInTheDocument();
    });

    test('tasklist_renders_the_task_list_as_an_ordered_list_li', () => {
      const { container } = render(<TaskList />);
      const liElement = container.querySelector('li');
      expect(liElement).toBeInTheDocument();
    });
  });
});
