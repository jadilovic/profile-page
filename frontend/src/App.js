import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import About from './pages/About';
import Home from './pages/Home';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="help" element={<HelpLayout />}>
					<Route path="faq" element={<Faq />} />
					<Route path="contact" element={<Contact />} />
				</Route>
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
