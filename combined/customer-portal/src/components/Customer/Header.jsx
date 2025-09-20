import React, { useState, useEffect } from "react";
import { Home, Search, Mail, Moon, Sun, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import logoLight from "../../assets/logo-light.png";
import PortalDropdown from "../PortalDropdown";

const Header = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	const navLinkClass =
		"flex items-center gap-2 px-3 py-2 transition-colors rounded-md";
	const activeClass =
		"text-primary-color dark:text-blue-400 font-medium bg-gray-100 dark:bg-gray-800";

	const navLinks = (
		<>
			<NavLink
				to="/"
				end
				className={({ isActive }) =>
					`${navLinkClass} ${
						isActive
							? activeClass
							: "text-gray-700 dark:text-gray-300 hover:text-primary-color dark:hover:text-blue-400"
					}`
				}>
				<Home className="h-4 w-4" /> Home
			</NavLink>
			<NavLink
				to="/search"
				className={({ isActive }) =>
					`${navLinkClass} ${
						isActive
							? activeClass
							: "text-gray-700 dark:text-gray-300 hover:text-primary-color dark:hover:text-blue-400"
					}`
				}>
				<Search className="h-4 w-4" /> Search
			</NavLink>
			<NavLink
				to="/inquiries"
				className={({ isActive }) =>
					`${navLinkClass} ${
						isActive
							? activeClass
							: "text-gray-700 dark:text-gray-300 hover:text-primary-color dark:hover:text-blue-400"
					}`
				}>
				<Mail className="h-4 w-4" /> Inquiries
			</NavLink>
		</>
	);

	return (
		<header className="w-full border-b border-border-color shadow bg-white dark:bg-gray-900 dark:border-gray-700">
			<div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
				{/* Logo */}
				<div>
					<img
						src={!darkMode ? logo : logoLight}
						alt="logo"
						className="w-32 max-md:w-28 h-auto object-contain"
					/>
				</div>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center gap-6">{navLinks}</nav>

				<div className="flex items-center gap-3 max-md:gap-0">
					{/* Dark Mode Toggle */}
					<button
						onClick={() => setDarkMode(!darkMode)}
						className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
						{darkMode ? (
							<Sun className="h-5 w-5 text-yellow-400" />
						) : (
							<Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
						)}
					</button>

					{/* Mobile Menu Toggle */}
					<button
						className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
						onClick={() => setMenuOpen(!menuOpen)}>
						{menuOpen ? (
							<X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
						) : (
							<Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
						)}
					</button>
					<PortalDropdown />
				</div>
			</div>

			{/* Mobile Nav */}
			{menuOpen && (
				<div className="md:hidden px-6 pb-4 flex flex-col gap-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
					{navLinks}
				</div>
			)}
		</header>
	);
};

export default Header;
