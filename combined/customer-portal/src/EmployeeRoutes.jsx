import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import Ambulance from "./pages/Employee/Ambulance";
import Cart from "./pages/Employee/Cart";
import Home from "./pages/Employee/Home";
import ComingSoon from "./pages/Employee/ComingSoon";
import Layout from "./components/Employee/Layout";

const EmployeeRoutes = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/ambulance" element={<Ambulance />} />
				<Route path="/*" element={<ComingSoon />} />
			</Routes>
		</Layout>
	);
};

export default EmployeeRoutes;
