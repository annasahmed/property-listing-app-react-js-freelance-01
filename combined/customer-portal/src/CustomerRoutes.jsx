import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Customer/Layout";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import Enquiries from "./pages/Customer/Enquiries";
import Home from "./pages/Customer/Home";
import Search from "./pages/Customer/Search";
import ComingSoon from "./pages/Customer/ComingSoon";

const CustomerRoutes = () => {
	return (
		<Layout>
			<Routes>
				<Route index element={<Home />} /> {/* "/" */}
				<Route path="search" element={<Search />} /> {/* "/search" */}
				<Route path="inquiries" element={<Enquiries />} /> {/* "/inquiries" */}
				<Route path="*" element={<ComingSoon />} /> {/* fallback */}
			</Routes>
		</Layout>
	);
};

export default CustomerRoutes;
