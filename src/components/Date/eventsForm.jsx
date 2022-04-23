import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import add from "../../assets/add.png";
import "../../stylesheets/Date/eventForm.css";

function EventsForm(props) {
	const [inputName, setInputName] = useState("");
	const [inputDate, setInputDate] = useState();

	const handleChangeName = (e) => {
		setInputName(e.target.value);
	};

	const handleChangeDate = (e) => {
		setInputDate(e.target.value);
	};

	return (
		<form
			className="eventsForm"
			onSubmit={(e) => {
				e.preventDefault();
				const newEvent = {
					id: uuidv4(),
					name: inputName,
					date: inputDate,
				};
				setInputName("");
				props.submitEvent(newEvent);
				document.querySelector(".inputEvent").value = "";
			}}
		>
			<input className="inputEvent" onChange={handleChangeName} type="text" placeholder="Add event" autoComplete="off"></input>
			<input className="inputDate" onChange={handleChangeDate} type="date" id="eventDate"></input>

			<button className="event-button">
				<img src={add} alt="" />
			</button>
		</form>
	);
}

export default EventsForm;
