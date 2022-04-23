import React from "react";
import "../stylesheets/task.css";
import deleteIcon from "../assets/delete.png";

function Task({ id, text, completed, taskCompleted, deleteTask, filtered }) {
	return (
		<div className={`${completed ? "task-container completed" : "task-container"}  ${completed == false && filtered == "completed" ? "filtered" : null} ${completed == true && filtered == "active" ? "filtered" : null}`}>
			<div className="task-text" onClick={() => taskCompleted(id)}>
				{text}
			</div>
			<div className="task-icon" onClick={() => deleteTask(id)}>
				<img src={deleteIcon} alt="" />
			</div>
		</div>
	);
}

export default Task;
