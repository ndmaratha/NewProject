import "./index.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Body from "./Component/Body";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer";
import NotFound from "./Component/NotFound";
import About from "./Component/Header/About";
import Contact from "./Component/Header/Contact";
import SingleProduct from "./Component/Product/SingleProduct";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import Cart from "./Component/Header/Cart";
import Checkout from "./Component/CheckOut";
import Sucess from "./Component/Sucess";
import Login from "./Component/Authentication/Login";
import SignUp from "./Component/Authentication/SignUp";
import ProfilePage from "./Component/ProfilePage";
const App = () => {
	return (
		<Provider store={store}>
			<Header />
			<Outlet />
			<Footer />
		</Provider>
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
			{
				path: "/product/:id",
				element: <SingleProduct />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signup",
				element: <SignUp />,
			},
			{
				path: "/profile",
				element: <ProfilePage />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/sucess",
				element: <Sucess />,
			},
			{ path: "/checkout", element: <Checkout /> },
		],
	},
]);
export default App;
