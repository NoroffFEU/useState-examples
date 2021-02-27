import { useState } from "react";

function NameButton() {
	const [name, setName] = useState("Mari");

	function handleClick() {
		setName("Jon");
	}

	return <button className="btn" onClick={handleClick}>{name}</button>;

	// return <button onClick={() => setName("Jon")}>{name}</button>;

	// return (
	// 	<button
	// 		onClick={function () {
	// 			setName("Jon");
	// 		}}
	// 	>
	// 		{name}
	// 	</button>
	// );
}

export default NameButton;
