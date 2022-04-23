import React, { useState } from "react";
import "../stylesheets/formTask.css";
import add from "../assets/add.png";
import { v4 as uuidv4 } from "uuid";

function FormTask(props) {
	const [input, setInput] = useState("");

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSend = (e) => {
		e.preventDefault();
		const newTask = {
			id: uuidv4(),
			text: input,
			completed: false,
		};
		setInput("");
		props.submitTask(newTask);
	};
	
	return (
		<form className="task-form" onSubmit={handleSend}>
			<input className="task-input" type="text" placeholder="Add task" autoComplete="off" name="text" onChange={handleChange}></input>
			<button className="task-button">
				<img src={add} alt="" />
			</button>
		</form>
	);
}

export default FormTask;
