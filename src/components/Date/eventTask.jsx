import React from "react";
import "../../stylesheets/Date/eventTask.css";
import deleteIcon from "../../assets/delete.png";

function EventTask({ id, name, date, deleteEvent }) {
	function dateDiff(d) {
		const targetDate = new Date(d);
		const now = new Date();
		const difference = targetDate.getTime() - now.getTime();
		const days = Math.ceil(difference / (1000 * 3600 * 24));
		return days;
	}

	return (
		<div class="event">
			<div class="days">
				<span class="days-number">{dateDiff(date)}</span>
				<span class="days-text">days</span>
			</div>
			<div class="event-name">{name}</div>
			<div class="event-date">{date}</div>
			<div class="actions" data-id={id} onClick={() => deleteEvent(id)}>
				<img src={deleteIcon} alt="" />
			</div>
		</div>
	);
}

export default EventTask;
