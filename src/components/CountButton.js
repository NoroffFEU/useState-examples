import { useState } from "react";

function CountButton() {
	const [count, setCount] = useState(0);

	function increment() {
		setCount(count + 1);
	}

	return (
		<button className="btn" onClick={increment}>
			{count}
		</button>
	);
}

export default CountButton;
