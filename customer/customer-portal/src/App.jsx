import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import Enquiries from "./pages/Enquiries";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ComingSoon from "./pages/ComingSoon";

function App() {
	return (
		<ThemeProvider>
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/search" element={<Search />} />
						<Route path="/inquiries" element={<Enquiries />} />
						<Route path="/*" element={<ComingSoon />} />
					</Routes>
				</Layout>
			</Router>
		</ThemeProvider>
	);
}

export default App;
