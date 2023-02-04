import { Outlet } from 'react-router-dom';

const CareersLayout = () => {
	return (
		<div>
			<h2>Careers</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
				repellat iste amet nihil neque expedita asperiores dolorem! Quas, ea
				dolor reiciendis id molestiae ratione delectus vitae quaerat voluptatum
				quod cupiditate.
			</p>
			<Outlet />
		</div>
	);
};
export default CareersLayout;
