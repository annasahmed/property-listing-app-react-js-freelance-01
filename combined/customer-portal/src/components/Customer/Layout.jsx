import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	const closeSidebar = () => {
		setSidebarOpen(false);
	};

	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
	return (
		<div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
			{/* Sidebar */}
			<Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

			{/* Sidebar overlay for mobile */}
			{sidebarOpen && (
				<div
					className="fixed inset-0 z-20 bg-black opacity-50 lg:hidden"
					onClick={closeSidebar}></div>
			)}

			{/* Main content wrapper */}
			<div className="flex flex-col flex-1 overflow-hidden">
				{/* Header */}
				<Header onToggleSidebar={toggleSidebar} />

				{/* Main content */}
				<main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
					<div className="container mx-auto px-6 py-8">{children}</div>
				</main>

				{/* Footer */}
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
