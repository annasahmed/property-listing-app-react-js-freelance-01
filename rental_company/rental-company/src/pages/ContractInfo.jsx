import { useState, useEffect } from "react";
import {
	FileText,
	Calendar,
	DollarSign,
	MapPin,
	Home,
	AlertCircle,
	Sun,
	Moon,
} from "lucide-react";
import logoLight from "../assets/logo-light.png";
import logo from "../assets/logo.png";
const ContractInfoPage = () => {
	const [darkMode, setDarkMode] = useState(false);

	// Toggle dark mode class on <html>
	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	return (
		<div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
			{/* Header */}

			<header className="border-b border-border-color bg-white dark:bg-gray-800 shadow-sm">
				<div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-4 ">
					{/* Logo */}
					<div>
						<img
							src={!darkMode ? logo : logoLight}
							alt="logo"
							className="w-28 h-auto object-contain"
						/>
					</div>

					{/* Dark Mode Toggle */}
					<button
						onClick={() => setDarkMode(!darkMode)}
						className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
						{darkMode ? (
							<Sun className="h-5 w-5 text-yellow-400" />
						) : (
							<Moon className="h-5 w-5 text-gray-800" />
						)}
					</button>
				</div>
			</header>

			{/* Main Content */}
			<div className="p-6 max-w-7xl mx-auto">
				<h1 className="text-2xl font-bold mb-6">Contract Information</h1>

				{/* Contract Details Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Contract Reference */}
					<div className="flex items-center gap-4 p-4 border rounded-xl shadow-sm bg-white dark:bg-gray-800">
						<FileText className="h-6 w-6 text-primary-color dark:text-secondary-color" />
						<div>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Contract Reference
							</p>
							<p className="text-base font-medium">CRN-2025-001</p>
						</div>
					</div>

					{/* Contract Period */}
					<div className="flex items-center gap-4 p-4 border rounded-xl shadow-sm bg-white dark:bg-gray-800">
						<Calendar className="h-6 w-6 text-primary-color dark:text-secondary-color" />
						<div>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Contract Period
							</p>
							<p className="text-base font-medium">01/01/2025 - 12/31/2025</p>
						</div>
					</div>

					{/* Contract Value */}
					<div className="flex items-center gap-4 p-4 border rounded-xl shadow-sm bg-white dark:bg-gray-800">
						<DollarSign className="h-6 w-6 text-primary-color dark:text-secondary-color" />
						<div>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Contract Value
							</p>
							<p className="text-base font-medium">$250,000</p>
						</div>
					</div>

					{/* Installment Due Date */}
					<div className="flex items-center gap-4 p-4 border rounded-xl shadow-sm bg-white dark:bg-gray-800">
						<Calendar className="h-6 w-6 text-primary-color dark:text-secondary-color" />
						<div>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Installment Due Date
							</p>
							<p className="text-base font-medium">15th of every month</p>
						</div>
					</div>

					{/* Insurance Amount */}
					<div className="flex items-center gap-4 p-4 border rounded-xl shadow-sm bg-white dark:bg-gray-800">
						<AlertCircle className="h-6 w-6 text-primary-color dark:text-secondary-color" />
						<div>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Insurance Amount
							</p>
							<p className="text-base font-medium">$10,000</p>
						</div>
					</div>

					{/* Property Type */}
					<div className="flex items-center gap-4 p-4 border rounded-xl shadow-sm bg-white dark:bg-gray-800">
						<Home className="h-6 w-6 text-primary-color dark:text-secondary-color" />
						<div>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Property
							</p>
							<p className="text-base font-medium">Apartment • Downtown City</p>
						</div>
					</div>
				</div>

				{/* Payment Progress */}
				<div className="mt-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
					<h2 className="text-lg font-semibold mb-4">Payment Progress</h2>
					<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
						<div
							className="bg-primary-color dark:bg-secondary-color h-4 rounded-full"
							style={{ width: "65%" }}></div>
					</div>
					<p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
						65% of payments completed
					</p>
				</div>

				{/* Raise Issue Box */}
				<div className="mt-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
					<h2 className="text-lg font-semibold mb-4">Raise an Issue</h2>
					<textarea
						rows="5"
						placeholder="Describe the issue here..."
						className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-3 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-color text-sm"></textarea>
					<button className="mt-4 px-5 py-2 rounded-lg bg-primary-color dark:bg-secondary-color text-white font-medium hover:opacity-90 transition">
						Submit Issue
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContractInfoPage;
