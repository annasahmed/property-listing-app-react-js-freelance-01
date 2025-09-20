import { Route, Routes } from "react-router-dom";
import ContractInfoPage from "./components/RentalCompany/ContractInfo";
import "./index.css";

const RentalRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<ContractInfoPage />} />
		</Routes>
	);
};

export default RentalRoutes;
