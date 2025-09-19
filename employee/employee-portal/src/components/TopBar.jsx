import {
	ArrowUpDown,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	ExternalLink,
	Menu,
	MoreHorizontal,
	Search,
} from "lucide-react";

const TopBar = () => {
	return (
		<div className="w-full flex items-center justify-between border-b border-border-color bg-gray-50 dark:bg-gray-900 px-4 py-2 text-sm">
			{/* Left Section */}
			<div className="flex items-center gap-4">
				{/* Dropdown */}
				<button className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300 hover:text-secondary-color transition-colors">
					<Menu className="h-6 w-6 border border-border-color p-1 rounded" />
					<span className="hidden sm:inline">FDD Faults</span>
					<ChevronDown className="h-4 w-4" />
				</button>

				{/* Tabs (hidden on small, visible on md+) */}
				<div className="hidden md:flex items-center gap-4">
					<button className="relative pb-1 text-secondary-color font-semibold transition-colors">
						Active
						<span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary-color rounded"></span>
					</button>
					<button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
						All Faults
					</button>
					<button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
						Unacknowledged
					</button>
				</div>

				{/* Collapsed Tabs for mobile */}
				<div className="md:hidden">
					<button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
						<MoreHorizontal className="h-5 w-5" />
					</button>
				</div>
			</div>

			{/* Right Section */}
			<div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
				{/* Show full controls on md+ */}
				<div className="hidden md:flex items-center gap-3">
					<span className="text-sm">1-50 of 168</span>
					<button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
						<ChevronLeft className="h-4 w-4" />
					</button>
					<button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
						<ChevronRight className="h-4 w-4" />
					</button>
					<button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
						<ArrowUpDown className="h-4 w-4" />
					</button>
					<button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
						<Search className="h-4 w-4" />
					</button>
					<button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
						<ExternalLink className="h-4 w-4" />
					</button>
				</div>

				{/* Mobile menu (collapses all actions) */}
				<div className="md:hidden">
					<button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
						<Menu className="h-5 w-5" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
