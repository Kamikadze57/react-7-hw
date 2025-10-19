import { Component } from "react";

class TaskList extends Component {
  DeleteTask = (taskId) => {
    this.props.onDelete(taskId);
  };
  render() {
    const { tasks } = this.props;
    if (!tasks || tasks.length === 0) {
      return <p className="no-tasks__text">Немає завдань у списку</p>;
    }
    return (
      <ul className="task__List">
        {tasks.map((task) => (
          <li className="task__item" key={task.id}>
            <p>
              {task.text}
              {task.completed && " (Виконано)"}
            </p>
            <button className="task__btn" onClick={() => this.DeleteTask(task.id)}>Видалити</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default TaskList;
