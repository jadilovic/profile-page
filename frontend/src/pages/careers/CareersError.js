import { Link, useRouteError } from 'react-router-dom';

const CareersError = () => {
	const error = useRouteError();

	return (
		<div className="careers-error">
			<h2>Error</h2>
			<p>{error.message}</p>
			<Link to={'/'}>Go to home page</Link>
		</div>
	);
};
export default CareersError;
