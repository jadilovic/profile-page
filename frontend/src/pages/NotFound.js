import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<h2>Not found page!</h2>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
				cupiditate, tempora explicabo ut sapiente quis earum non unde? Numquam
				reiciendis possimus eveniet sapiente dolores dolorum eaque fugiat nam.
				Delectus, fugiat!
			</p>
			<p>
				Click <Link to={'/'}>here</Link> to go to the Home Page
			</p>
		</div>
	);
};
export default NotFound;
