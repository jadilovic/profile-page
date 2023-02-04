import { useLoaderData, Link } from 'react-router-dom';

const Careers = () => {
	const data = useLoaderData();
	console.log(data.careers);
	return (
		<div className="careers">
			{data.careers.map((career) => {
				const { title, location, id } = career;
				return (
					<Link to={`${id}`} key={id}>
						<p>{title}</p>
						<p>{`Based in ${location}`}</p>
					</Link>
				);
			})}
		</div>
	);
};
export default Careers;
