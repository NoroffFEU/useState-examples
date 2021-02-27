import { useState } from "react";

function Nav() {
	const [open, toggleOpen] = useState(false);

	function toggle() {
		toggleOpen(!open);
	}

	return (
		<nav>
			<div>
				Menu
				<button onClick={toggle}>{open ? "Close" : "Open"}</button>
			</div>
			<div className={`menu ${open ? "" : "closed"}`}>
				<a href="/">Home</a>
				<a href="/">About</a>
				<a href="/">Contact</a>
			</div>
		</nav>
	);
}

export default Nav;
