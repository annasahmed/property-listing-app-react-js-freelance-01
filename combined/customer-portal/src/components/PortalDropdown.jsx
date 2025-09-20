import { useNavigate, useLocation } from "react-router-dom";

const PortalDropdown = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const handleChange = (e) => {
		navigate(e.target.value);
	};

	// Detect current portal from URL
	const currentPath = location.pathname.startsWith("/rental")
		? "/rental"
		: location.pathname.startsWith("/employee")
		? "/employee"
		: "/";

	return (
		<div className="flex items-center">
			{/* <label
				htmlFor="portal-select"
				className="text-sm font-medium text-gray-700 dark:text-gray-300">
				Switch Portal:
			</label> */}
			<select
				id="portal-select"
				onChange={handleChange}
				value={currentPath}
				className="
          border border-gray-300 dark:border-gray-600 
          rounded-lg px-3 py-2 max-md:px-1 max-md:text-sm 
          bg-white dark:bg-gray-800 
          text-gray-900 dark:text-gray-100 
          focus:outline-none focus:ring-2 
          focus:ring-blue-500 dark:focus:ring-blue-400 
          transition
        ">
				<option className="max-md:text-sm" value="/">
					Customer Portal
				</option>
				<option className="max-md:text-sm" value="/rental">
					Rental Portal
				</option>
				<option className="max-md:text-sm" value="/employee">
					Employee Portal
				</option>
			</select>
		</div>
	);
};

export default PortalDropdown;
