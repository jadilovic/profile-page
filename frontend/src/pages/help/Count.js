import { useState, useEffect, useRef } from 'react';

const Count = () => {
	// useState
	const [count, setCount] = useState(0);
	const [num, setNum] = useState(0);
	const myBtn = useRef(null);
	// let [count, setCount] = React.useState(0);
	const handleClickUpdate = () => {
		setCount((e) => e + 1);
		console.log(count);
		// count = count + 1; // will not update the DOM
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setNum((prev) => prev + 1);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [num]);

	return (
		<>
			{count}
			<button onClick={handleClickUpdate}>Click me</button>
			<div>
				<p>{num}</p>
			</div>
			<button ref={myBtn}>Ref Button</button>
		</>
	);
};

export default Count;
