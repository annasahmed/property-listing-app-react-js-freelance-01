import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import ContractInfoPage from "./pages/ContractInfo";

function App() {
	return (
		<ThemeProvider>
			<Router>
				<Routes>
					<Route path="/" element={<ContractInfoPage />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
