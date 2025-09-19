import {
	ArrowLeft,
	ChevronDown,
	ChevronUp,
	EllipsisVertical,
	Pencil,
	X,
} from "lucide-react";
import waterFallImage from "../assets/waterfall.jpeg";
import roundedPatternImage from "../assets/rouded-pattern.jpeg";
import mapImage from "../assets/map-icon.png";
import floorDesign from "../assets/floor-design.png";
import { useState } from "react";

const lists = [
	"Lift Area",
	"Lobby",
	"East Lounge",
	"Private Office",
	"Meeting Room 1",
	"Reception",
	"Break Room",
	"West Lounge",
	"North Lounge",
	"Outdoor Terrace",
	"Meeting Room 2",
];

const maps = [
	{
		image: mapImage,
		title: "CD Roof",
		items: lists,
	},
	{
		image: roundedPatternImage,
		title: "CD Floor 01",
		items: lists,
		roundedImage: true,
	},
];

const Home = () => {
	const [open, setOpen] = useState(1);
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<main className="flex h-screen overflow-hidden relative">
			{/* Overlay for mobile */}
			{showSidebar && (
				<div
					className="fixed inset-0 bg-black/50 dark:bg-gray-700/50 z-10 md:hidden"
					onClick={() => setShowSidebar(false)}></div>
			)}

			{/* Sidebar */}
			<aside
				className={`fixed z-20 md:static md:translate-x-0 w-72 max-w-84 min-h-screen overflow-auto hide-scrollbar border-l md:border-r border-border-color dark:border-gray-700 bg-gray-50 dark:bg-gray-900 transition-transform duration-300 
					${showSidebar ? "translate-x-0 right-0" : "translate-x-full right-0"}
					md:right-auto md:translate-x-0`}>
				{/* Close button (mobile only) */}
				<div className="md:hidden flex justify-end p-3 border-b border-border-color dark:border-gray-700">
					<button
						onClick={() => setShowSidebar(false)}
						className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
						<X className="w-5 h-5 text-gray-800 dark:text-gray-200" />
					</button>
				</div>

				{/* Back */}
				<div className="px-4 flex gap-2 items-center py-2 border-b border-border-color dark:border-gray-700 text-gray-700 dark:text-gray-300">
					<ArrowLeft className="w-4 h-4" />
					<p className="text-sm font-medium">Back to List</p>
				</div>

				{/* Site Info */}
				<div className="px-4 flex gap-4 items-center py-4 border-b border-border-color dark:border-gray-700">
					<img
						src={waterFallImage}
						alt="waterfall-img"
						className="w-12 h-12 rounded-full object-cover"
					/>
					<div className="flex-1">
						<div className="flex justify-between w-full text-secondary-color">
							<p className="text-sm font-medium">#1293666</p>
							<p className="text-xs md:text-sm font-medium cursor-pointer hover:underline">
								Change Site
							</p>
						</div>
						<p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200">
							1 Corporate Drive
						</p>
					</div>
				</div>

				{/* Map List */}
				<div className="font-medium text-gray-800 dark:text-gray-200">
					{maps.map((item, index) => (
						<div key={index}>
							<div
								className={`flex pr-4 pl-7 py-3 gap-4 cursor-pointer hover:bg-primary-color/10 dark:hover:bg-primary-color/20 transition-colors ${
									open === index
										? "bg-primary-color/10 dark:bg-primary-color/20"
										: "bg-transparent"
								}`}
								onClick={() => setOpen(open === index ? null : index)}>
								<img
									src={item.image}
									alt="map"
									className="w-7 h-7 object-cover"
									style={{
										borderRadius: item.roundedImage ? "100%" : undefined,
									}}
								/>
								<p className="flex-1 text-sm md:text-base">{item.title}</p>
								{open === index ? <ChevronDown /> : <ChevronUp />}
							</div>

							{/* Expandable List */}
							<ul
								className={`flex flex-col gap-2 pr-4 pl-14 py-2 overflow-hidden transition-all duration-500 ease-in-out text-sm md:text-base ${
									open === index
										? "max-h-1000 opacity-100"
										: "max-h-0 opacity-0"
								}`}>
								{item.items.map((listItem, i) => (
									<li
										className="list-disc text-gray-600 dark:text-gray-400"
										key={i}>
										{listItem}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</aside>

			{/* Content Section */}
			<section className="w-full overflow-auto">
				{/* Mobile Sidebar Toggle */}
				<div className="md:hidden p-3 border-b border-border-color dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex justify-between items-center">
					<p className="text-secondary-color text-sm">#1293666</p>
					<button
						onClick={() => setShowSidebar(!showSidebar)}
						className="text-gray-700 dark:text-gray-200 font-medium">
						Menu
					</button>
				</div>

				{/* Header */}
				<header className="px-4 py-4 md:py-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 border-b border-border-color dark:border-gray-700 bg-gray-50 dark:bg-gray-900 transition-colors">
					<img
						src={roundedPatternImage}
						alt="pattern"
						className="w-16 h-16 md:w-21 md:h-21 object-cover rounded-full"
					/>

					<div className="flex-1 font-medium text-sm text-gray-800 dark:text-gray-200">
						<p className="mb-2 text-xs md:text-sm">
							1 Corporate Drive / Corporate Drive Building /{" "}
							<span className="opacity-60">CD Floor 01</span>
						</p>
						<p className="text-secondary-color">#1293666</p>
						<p className="text-lg md:text-xl flex gap-4 md:gap-6 items-center">
							CD Floor 01{" "}
							<button className="font-normal bg-primary-color/80 hover:bg-primary-color/60 rounded-full px-3 md:px-4 py-1 text-white text-[10px] transition-colors">
								ACTIVE
							</button>
						</p>
					</div>

					{/* Action Buttons */}
					<div className="flex flex-wrap md:gap-2 gap-1 self-start md:self-auto pt-2 md:pt-4">
						<button className="bg-primary-color/80 hover:bg-primary-color/60 text-white px-3 md:px-6 py-2 rounded-sm transition-colors text-xs md:text-sm">
							MARK AS INACTIVE
						</button>
						<button className="bg-primary-color/80 hover:bg-primary-color/60 text-white px-4 md:px-6 py-2 rounded-sm transition-colors text-xs md:text-sm">
							NEW SPACE
						</button>
						<div className="flex">
							<button className="flex justify-center items-center border border-border-color dark:border-gray-700 px-2 md:px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
								<Pencil className="w-4 h-4 max-md:w-3 max-md:h-3" />
							</button>
							<button className="flex justify-center items-center border border-border-color dark:border-gray-700 px-2 md:px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
								<EllipsisVertical className="w-4 h-4 max-md:w-3 max-md:h-3" />
							</button>
						</div>
					</div>
				</header>

				{/* Content */}
				<section className="p-3 md:p-4 flex flex-col gap-4 md:gap-6 mb-12">
					{/* Floor Plan */}
					<section className="bg-gray-50 dark:bg-gray-900 w-full flex justify-center p-4 md:p-6 transition-colors">
						<img
							src={floorDesign}
							alt="floor-design"
							className="w-full md:w-[70%] object-contain"
						/>
					</section>

					{/* Details */}
					<section className="bg-gray-50 dark:bg-gray-900 w-full p-4 md:p-6 pt-2 font-medium text-gray-800 dark:text-gray-200 transition-colors">
						<div className="grid grid-cols-2 md:grid-cols-4 py-3 md:py-4 border-b border-border-color dark:border-gray-700 text-xs md:text-sm">
							<p>Floor Level</p>
							<p>1</p>
							<p>Area</p>
							<p>5051sqft</p>
						</div>
						<div className="grid grid-cols-2 md:grid-cols-4 py-3 md:py-4 border-b border-border-color dark:border-gray-700 text-xs md:text-sm">
							<p>Max Occupancy</p>
							<p>35</p>
							<p className="hidden md:block"></p>
							<p className="hidden md:block"></p>
						</div>
					</section>
				</section>
			</section>
		</main>
	);
};

export default Home;
