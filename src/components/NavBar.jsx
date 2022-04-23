import React, { useState } from "react";
import sidebar from "../assets/sidebar.png";
import "../stylesheets/Navbar.css";

function NavBar(props) {
	const [navbar, setNavbar] = useState("closed");
	const showNavBar = () => {
		if (navbar === "closed") {
			setNavbar("open");
		} else {
			setNavbar("closed");
		}
	};
	return (
		<>
			<img onClick={showNavBar} className="sidebar-icon" src={sidebar}></img>

			<div onClick={showNavBar} className={`${navbar === "open" ? "navBar-container open" : "navBar-container closed"}`}>
				<div className="navBar-button" onClick={props.showToDo}>
					To Do
				</div>
				<div className="navBar-button" onClick={props.showEvent}>
					Events
				</div>
				<div className="navBar-button" onClick={props.showPomodoro}>
					Pomodoro
				</div>
			</div>
		</>
	);
}

export default NavBar;
