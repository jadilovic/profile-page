import { useState } from 'react';

const Count = () => {
	// useState
	const [count, setCount] = useState(0);
	// let [count, setCount] = React.useState(0);
	const handleClickUpdate = () => {
		setCount((e) => e + 1);
		console.log(count);
		// count = count + 1; // will not update the DOM
	};

	return (
		<>
			{count}
			<button onClick={handleClickUpdate}>Click me</button>
		</>
	);
};

export default Count;
