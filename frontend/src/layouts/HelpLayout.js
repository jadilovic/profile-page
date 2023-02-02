import { NavLink, Outlet } from 'react-router-dom';

const HelpLayout = () => {
	return (
		<div className="help-layout">
			<h2>Help Page</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti
				ipsam dolor accusamus perferendis amet cum maiores. Aut ex id
				perspiciatis totam numquam reprehenderit consequuntur ratione, cumque
				unde assumenda et rerum nam. Eos, culpa eligendi. Nemo repudiandae dicta
				porro id ratione provident minima officiis?
			</p>
			<nav>
				<NavLink to="faq">Frequently Asked Questions</NavLink>
				<NavLink to="contact">Contact Us</NavLink>
			</nav>
			<Outlet />
		</div>
	);
};
export default HelpLayout;
