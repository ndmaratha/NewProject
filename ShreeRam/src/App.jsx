import { createBrowserRouter, Outlet } from "react-router-dom";
import Body from "./Component/Body";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import NotFound from "./Component/NotFound";
import About from "./Component/About";
import Contact from "./Component/Contact";

const App = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);
export default App;
