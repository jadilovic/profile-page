import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import CareersLayout from './layouts/CareersLayout';
import About from './pages/About';
import Home from './pages/Home';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
import LoginForm from './pages/help/LoginForm';
import NotFound from './pages/NotFound';
import Careers from './pages/careers/Careers';
import { getCareers } from './pages/util';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="help" element={<HelpLayout />}>
					<Route path="faq" element={<Faq />} />
					<Route path="contact" element={<Contact />} />
					<Route path="login-form" element={<LoginForm />} />
				</Route>
				<Route path="careers" element={<CareersLayout />}>
					<Route index element={<Careers />} loader={getCareers} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
