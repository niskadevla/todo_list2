import React, {Component} from 'react';
import Task from './Task';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {tasks: []}
  }

  deleteTask(i) {
    const tasks = this.state.tasks;
    tasks.splice(i, 1);
    this.setState({tasks})
  }

  updateTask(text, i) {
    const tasks = this.state.tasks;
    tasks[i].text = text;
    this.setState({tasks})
  }

  add() {
    const tasks = this.state.tasks;
    tasks.push({
      text: 'new text',
      read: false,
      edit: false,
    });

    this.setState({tasks});
  }

  render() {
    const tasks = this.state.tasks;
    return (
      <div className="task-list-wrap">
        <button className="btn btn-new" onClick={() => this.add()}>
          <span className="btn__line btn__line_top"></span>
          <span className="btn__line btn__line_right"></span>
          <span className="btn__line btn__line_bottom"></span>
          <span className="btn__line btn__line_left"></span>
          Add new Task
        </button>
        <ul className="task-list">
          {tasks.map((task, index) =>
            <Task key={index}
              index={index}
              onRemove={i => this.deleteTask(i)}
              onSave={(text, i) => this.updateTask(text, i)}>
                {task.text}
            </Task>)
          }
        </ul>
      </div>
    );
  }
}

export default TaskList;
