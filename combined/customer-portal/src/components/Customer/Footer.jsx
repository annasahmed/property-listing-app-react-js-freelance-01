import React from "react";

const Footer = () => {
	return (
		<footer className="w-full border-t border-border-color shadow bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
			<div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400">
				{/* Left */}
				<p>
					&copy; {new Date().getFullYear()} PropertyFinder. All rights reserved.
				</p>

				{/* Right */}
				<div className="flex gap-6 mt-3 md:mt-0">
					<a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
						Privacy Policy
					</a>
					<a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
						Terms of Service
					</a>
					<a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
						Contact
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
