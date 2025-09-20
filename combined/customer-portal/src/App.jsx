import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import CustomerRoutes from "./CustomerRoutes";
import EmployeeRoutes from "./EmployeeRoutes";
import "./index.css";
import RentalRoutes from "./RentalRoutes";

function App() {
	return (
		<ThemeProvider>
			<Router>
				<Routes>
					<Route path="/*" element={<CustomerRoutes />} />
					<Route path="/rental/*" element={<RentalRoutes />} />
					<Route path="/employee/*" element={<EmployeeRoutes />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
