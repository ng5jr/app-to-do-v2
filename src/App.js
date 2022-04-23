import React, { useState } from "react";

import "./App.css";
import "./stylesheets/variables.css";

import NavBar from "./components/NavBar";

import EventList from "./components/Date/eventList";

import ToDoList from "./components/toDoList";

function App() {
	const [app, setApp] = useState("todo");

	const showToDo = () => {
		setApp("todo");
	};

	const showEvent = () => {
		setApp("event");
	};

	const showPomodoro = () => {
		setApp("pomodoro");
	};

	return (
		<div className="app-container">
			<NavBar showToDo={showToDo} showEvent={showEvent} showPomodoro={showPomodoro} />

			<div id="to-do" className={`${app === "todo" ? "tasks-app" : "tasks-app hidden-app"}`}>
				<div className="main-tasks">
					<div class="title">
						<h1>TO-DO</h1>
					</div>
					<ToDoList />
				</div>
			</div>
			<div id="eventApp" className={`${app === "event" ? "events-app" : "events-app hidden-app"}`}>
				<div className="main-tasks">
					<div class="title">
						<h1>EVENTS</h1>
					</div>
					<EventList />
				</div>
			</div>
		</div>
	);
}

export default App;
