import React, { useEffect, useState } from "react";
import EventsForm from "./eventsForm";
import EventTask from "./eventTask";
import "../../stylesheets/Date/eventList.css";

function EventLIst() {
	const [events, setEvents] = useState(() => {
		const savedEvents = localStorage.getItem("react-storedEvents");
		const initialValueEvents = JSON.parse(savedEvents);
		return initialValueEvents || "";
	});

	useEffect(() => {
		let eventItems = events;
		localStorage.setItem("react-storedEvents", JSON.stringify(eventItems));
	}, [events]);

	function dateDiff(d) {
		const targetDate = new Date(d);
		const now = new Date();
		const difference = targetDate.getTime() - now.getTime();
		const days = Math.ceil(difference / (1000 * 3600 * 24));
		return days;
	}

	const deleteEvent = (id) => {
		const updatedEvents = events.filter((evento) => evento.id !== id);
		setEvents(updatedEvents);
	};

	return (
		<>
			<div>
				<EventsForm
					submitEvent={(event) => {
						if (event.name === "" || event.date == "" || event.date === undefined) {
							return;
						}
						if (dateDiff(event.date) < 0) {
							return;
						} else {
							const updatedEvents = [event, ...events];

							setEvents(updatedEvents);
						}
					}}
				/>
				<div className="events-container">
					{events.map((evento) => (
						<EventTask name={evento.name} date={evento.date} id={evento.id} key={evento.id} deleteEvent={deleteEvent} />
					))}
				</div>
			</div>
		</>
	);
}

export default EventLIst;
