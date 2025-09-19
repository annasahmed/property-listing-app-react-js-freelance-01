import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import Ambulance from "./pages/Ambulance";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";

function App() {
	return (
		<ThemeProvider>
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/ambulance" element={<Ambulance />} />
						<Route path="/*" element={<ComingSoon />} />
					</Routes>
				</Layout>
			</Router>
		</ThemeProvider>
	);
}

export default App;
