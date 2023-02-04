import { useLoaderData } from 'react-router-dom';
import { getSingleCareer } from '../util';

const CareerDetails = () => {
	//	const { id } = useParams();
	const career = useLoaderData();
	const { title, location, salary } = career;
	return (
		<div className="career-details">
			<h2>{`Job title: ${title}`}</h2>
			<p>{`Salary: ${salary}`}</p>
			<p>{`Location: ${location}`}</p>
			<div className="details">
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni culpa
					eaque itaque perspiciatis maiores porro? Quis obcaecati error cum
					mollitia, tempore incidunt dignissimos ipsum? Quasi saepe nobis
					necessitatibus alias ea?
				</p>
			</div>
		</div>
	);
};

export default CareerDetails;

export const careerDetailsLoader = ({ params }) => {
	const { id } = params;
	const career = getSingleCareer(id);
	return career;
};
