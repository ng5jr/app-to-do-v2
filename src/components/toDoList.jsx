import React, { useEffect, useState } from "react";
import FormTask from "./formTask";
import Task from "./task";
import "../stylesheets/toDoList.css";

function ToDoList() {
	const [tasks, setTasks] = useState(() => {
		const saved = localStorage.getItem("react-storedItems");
		const initialValue = JSON.parse(saved);
		return initialValue || "";
	});

	useEffect(() => {
		let toDoItems = tasks;
		localStorage.setItem("react-storedItems", JSON.stringify(toDoItems));
	}, [tasks]);

	const addTask = (task) => {
		if (task.text.trim()) {
			task.text = task.text.trim();
			const updatedTasks = [task, ...tasks];
			setTasks(updatedTasks);
			document.querySelector("input").value = "";
		}
	};

	const deleteTask = (id) => {
		const updatedTasks = tasks.filter((task) => task.id !== id);
		setTasks(updatedTasks);
	};

	const taskCompleted = (id) => {
		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				task.completed = !task.completed;
			}
			return task;
		});

		setTasks(updatedTasks);
	};

	const [isActive, setActive] = useState("all");

	const showCompleted = () => {
		setActive("completed");
	};

	const showActive = () => {
		setActive("active");
	};

	const showAll = () => {
		setActive("all");
	};

	return (
		<>
			<div>
				<FormTask submitTask={addTask} />
				<div className="filter-items">
					<h2 className={`${isActive === "all" ? "all highlight" : "all"}`} onClick={showAll}>
						All
					</h2>
					<h2 className={`${isActive === "active" ? "activeFilter highlight" : "activeFilter"}`} onClick={showActive}>
						Active
					</h2>
					<h2 className={`${isActive === "completed" ? "completed highlight" : "completed"}`} onClick={showCompleted}>
						Completed
					</h2>
				</div>
				<div className="task-todo-container">
					{tasks.map((task) => (
						<Task text={task.text} filtered={isActive} completed={task.completed} key={task.id} id={task.id} deleteTask={deleteTask} taskCompleted={taskCompleted} />
					))}
				</div>
			</div>
		</>
	);
}

export default ToDoList;
