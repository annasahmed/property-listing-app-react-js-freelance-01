// src/pages/Properties.jsx
import React, { useState } from "react";
import { Map, List, Filter, Bookmark } from "lucide-react";
import property1 from "../assets/poperty1.jpeg";
import property2 from "../assets/poperty2.jpeg";
import property3 from "../assets/poperty3.jpeg";
import property4 from "../assets/poperty4.jpeg";
import property5 from "../assets/poperty5.jpeg";
import PropertiesMap from "../components/PropertiesMap";

const properties = [
	{
		id: 1,
		city: "Khobar",
		name: "Nesaj Lazurd",
		type: "Villa",
		units: 1064,
		image: property1, // replace with your image path
	},
	{
		id: 2,
		city: "Jeddah",
		name: "Nesaj Al Sadan",
		type: "Villa",
		units: 550,
		image: property2,
	},
	{
		id: 3,
		city: "Jeddah",
		name: "Nesaj Sadayem",
		type: "Villa",
		units: 352,
		image: property3,
	},
	{
		id: 4,
		city: "Jeddah",
		name: "Nesaj Sadayem",
		type: "Villa",
		units: 352,
		image: property4,
	},
	{
		id: 5,
		city: "Khobar",
		name: "Nesaj Lazurd",
		type: "Villa",
		units: 1064,
		image: property5,
	},
];

const Search = () => {
	const [view, setView] = useState("list");

	return (
		<div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-4 md:p-8">
			{/* Search Bar */}
			<div className="max-w-5xl mx-auto">
				<div className="relative mb-6">
					<input
						type="text"
						placeholder="Search a property"
						className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
					/>
				</div>

				{/* Tabs & Filter */}
				<div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 mb-6">
					<div className="flex gap-6">
						<button
							onClick={() => setView("list")}
							className={`flex items-center gap-1 pb-2 border-b-2 ${
								view === "list"
									? "border-orange-500 text-orange-500"
									: "border-transparent text-gray-500 dark:text-gray-400"
							}`}>
							<List size={18} /> List view
						</button>
						<button
							onClick={() => setView("map")}
							className={`flex items-center gap-1 pb-2 border-b-2 ${
								view === "map"
									? "border-orange-500 text-orange-500"
									: "border-transparent text-gray-500 dark:text-gray-400"
							}`}>
							<Map size={18} /> Map view
						</button>
					</div>
					<button className="flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
						<Filter size={16} /> Add filters
					</button>
				</div>

				{/* Properties */}
				{view === "list" ? (
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{properties.map((p) => (
							<div
								key={p.id}
								className="border border-gray-200 dark:border-gray-800 dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
								{/* Image */}
								<div className="relative h-48 w-full">
									<img
										src={p.image}
										alt={p.name}
										className="h-full w-full object-cover hover:scale-105 transition-all"
									/>
									<button className="absolute top-3 right-3 rounded-full bg-white/80 dark:bg-gray-800/80 p-1">
										<Bookmark
											size={18}
											className="text-gray-700 dark:text-gray-200"
										/>
									</button>
								</div>

								{/* Details */}
								<div className="p-4">
									<p className="text-sm text-gray-500 dark:text-gray-400">
										{p.city}
									</p>
									<h3 className="text-lg font-semibold">{p.name}</h3>
									<p className="text-sm">
										Type: <span className="font-medium">{p.type}</span>
									</p>
									<p className="text-sm">
										Units: <span className="font-medium">{p.units}</span>
									</p>
									<button className="mt-3 text-orange-600 dark:text-orange-400 font-medium text-sm hover:underline">
										View details →
									</button>
								</div>
							</div>
						))}
					</div>
				) : (
					<PropertiesMap />
				)}
			</div>
		</div>
	);
};

export default Search;
