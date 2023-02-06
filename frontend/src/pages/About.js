import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const About = () => {
	const [logged, setLogged] = useState(true);
	if (!logged) {
		return <Navigate to={'/'} replace={true} />;
	}
	return (
		<div className="about">
			<h2>About us</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod veniam
				unde neque dolorem, tempore in maiores, officia tenetur doloribus
				obcaecati quibusdam beatae minima aliquid cum corrupti eveniet!
				Doloribus odio consequatur explicabo quis accusantium eos. Quo quidem
				perferendis fuga sunt aperiam ipsum qui porro amet!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod veniam
				unde neque dolorem, tempore in maiores, officia tenetur doloribus
				obcaecati quibusdam beatae minima aliquid cum corrupti eveniet!
				Doloribus odio consequatur explicabo quis accusantium eos. Quo quidem
				perferendis fuga sunt aperiam ipsum qui porro amet!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod veniam
				unde neque dolorem, tempore in maiores, officia tenetur doloribus
				obcaecati quibusdam beatae minima aliquid cum corrupti eveniet!
				Doloribus odio consequatur explicabo quis accusantium eos. Quo quidem
				perferendis fuga sunt aperiam ipsum qui porro amet!
			</p>
			<button onClick={() => setLogged(false)}>Log out</button>
		</div>
	);
};
export default About;
