import { ArrowLeft, EllipsisVertical, Pencil, Grip, X } from "lucide-react";
import { useState } from "react";
import floorDesign from "../assets/floor-design.png";

const lists = [
	"CD-F1-FAHU",
	"YLS-FL30 CHILLER-01",
	"LA2-1F-FOU",
	"HB-AHU-03",
	"YLS-Chiller Plant Manger",
	"YLS-FL41 FOU ELV",
	"LAZ-2F-FAHU 2",
	"CD-F2-FAHU-01",
	"KTB-SAB-Chiller-3",
	"AZ-Common Secondary Pump",
	"YLS-FL3R CWSPP-03",
];

const tabs = [
	"SUMMARY",
	"MAINTENANCE",
	"HEADINGS",
	"PERFORMANCE",
	"FINANCIAL",
	"GRAPHICS",
	"SAFETY",
	"RELATED RECORDS",
	"HISTORY",
];

const Cart = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<main className="flex h-screen overflow-hidden dark:text-gray-300">
			{/* Sidebar (desktop) */}
			<aside className="hidden md:block max-w-84 w-full min-h-screen overflow-auto hide-scrollbar border-r-2 border-border-color bg-gray-50 dark:bg-gray-900">
				<div className="px-4 flex gap-2 items-center py-2 border-b border-border-color">
					<ArrowLeft className="w-4 h-4" />
					<p className="text-sm font-medium">All Assets</p>
				</div>
				<div className="font-medium">
					{lists.map((item, index) => (
						<div
							key={index}
							className="flex pr-4 pl-7 py-4 gap-4 border-b border-border-color hover:bg-primary-color/5">
							{item}
						</div>
					))}
				</div>
			</aside>

			{/* Content Section */}
			<section className="flex-1 overflow-auto">
				{/* Header */}
				<header className="px-4 py-6 flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8 bg-gray-50 dark:bg-gray-900 w-full">
					{/* Mobile Menu Button */}
					<button
						onClick={() => setMenuOpen(true)}
						className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800">
						<Grip className="w-5 h-5" />
					</button>

					<div className="flex-1 font-medium text-sm">
						<p className="text-secondary-color">#1293666</p>
						<p className="text-xl flex gap-3 items-center">
							CD-F1-FAHU
							<button className="font-normal bg-primary-color/80 hover:bg-primary-color/60 rounded-full px-4 text-white text-[10px]">
								ACTIVE
							</button>
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-2 self-start md:pt-4 w-full md:w-auto">
						<button className="bg-primary-color/80 hover:bg-primary-color/60 transition-all text-white px-4 py-2 rounded-sm w-full sm:w-auto">
							MARK AS INACTIVE
						</button>
						<button className="bg-primary-color/80 hover:bg-primary-color/60 transition-all text-white px-4 py-2 rounded-sm w-full sm:w-auto">
							RETIRE
						</button>
					</div>
				</header>

				{/* Tabs */}
				<section className="px-4 pb-6 pt-2 flex items-center gap-6 border-b border-border-color bg-gray-50 dark:bg-gray-900 w-full overflow-x-auto hide-scrollbar">
					{tabs.map((item, i) => (
						<p key={i} className="text-sm font-semibold whitespace-nowrap">
							{item}
						</p>
					))}
				</section>

				{/* Body */}
				<section className="p-4 flex flex-col gap-6 mb-12">
					{/* Top grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						<section className="bg-gray-50 dark:bg-gray-900 w-full flex items-start gap-4 p-6">
							<p className="rounded-full px-2 py-1 text-white bg-red-900">JA</p>
							<div>
								<p className="font-medium text-sm">Jerril Adams</p>
								<p className="font-medium text-xs text-gray-400">
									HVAC Maintainance
								</p>
							</div>
						</section>

						<section className="bg-gray-50 dark:bg-gray-900 w-full gap-4 items-center p-6">
							<p className="font-medium text-xl">18646 Days 7 Hrs</p>
							<p className="font-medium text-xs text-gray-400">Thile Month</p>
						</section>

						<section className="bg-gray-50 dark:bg-gray-900 w-full gap-4 items-center p-6">
							<p className="font-medium text-xs mb-2">DOWNTIME</p>
							<div className="flex justify-between items-end">
								<p className="font-medium text-2xl">
									00:00 <span className="text-xs">Hrs</span>
								</p>
								<p className="font-bold text-xs">
									00:00{" "}
									<span className="text-xs font-medium">
										Hrs till last month
									</span>
								</p>
							</div>
							<p className="font-medium text-xs text-gray-400">Thile Year</p>
						</section>
					</div>

					{/* Details */}
					<section className="bg-gray-50 dark:bg-gray-900 w-full p-6 pt-2 font-medium">
						<div className="grid grid-cols-2 sm:grid-cols-4 py-4 border-b border-border-color">
							<p>Department</p>
							<p>HVAC</p>
							<p>InUse</p>
							<p>---</p>
						</div>
						<div className="grid grid-cols-2 sm:grid-cols-4 py-4 border-b border-border-color">
							<p>Is Movealble</p>
							<p>No</p>
							<p>Is Move Approval Needed</p>
							<p>No</p>
						</div>
						<div className="grid grid-cols-2 sm:grid-cols-4 py-4 border-b border-border-color">
							<p>Manufacturer</p>
							<p>Daikin</p>
							<p>Mercatus Field</p>
							<p>---</p>
						</div>
					</section>

					{/* Notes */}
					<div>
						<section className="px-4 sm:px-8 pb-4 pt-4 flex items-center justify-start gap-8 border-b border-border-color bg-gray-50 dark:bg-gray-900 w-full overflow-x-auto hide-scrollbar">
							<p className="text-sm font-semibold whitespace-nowrap">Notes</p>
							<p className="text-sm font-semibold whitespace-nowrap">
								Documents
							</p>
						</section>
						<section className="px-4 sm:px-8 pb-4 pt-4 flex items-start gap-4 border-b border-border-color bg-gray-50 dark:bg-gray-900 w-full">
							<p className="rounded-full px-2 py-1 text-white bg-yellow-300">
								FA
							</p>
							<div>
								<p className="font-medium text-sm mb-2">
									Recently, I found out there is mold in the AHU as well as the
									ducts. I have regular maintenance done on my unit so I'm
									wondering why the mold wasn't discovered earlier and/or
									cleaned up...
								</p>
								<p className="font-medium text-xs text-gray-400">
									Facle 17 hours ago
								</p>
							</div>
						</section>
					</div>
				</section>
			</section>

			{/* Mobile Drawer */}
			{menuOpen && (
				<>
					<div
						className="fixed inset-0 bg-black/50 z-30"
						onClick={() => setMenuOpen(false)}
					/>
					<div className="fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg z-40 p-6 flex flex-col">
						<div className="flex justify-between items-center mb-6">
							<p className="font-bold">All Assets</p>
							<button
								onClick={() => setMenuOpen(false)}
								className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
								<X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
							</button>
						</div>

						<div className="font-medium">
							{lists.map((item, index) => (
								<div
									key={index}
									className="flex pr-4 pl-4 py-3 gap-4 border-b border-border-color hover:bg-primary-color/5"
									onClick={() => setMenuOpen(false)}>
									{item}
								</div>
							))}
						</div>
					</div>
				</>
			)}
		</main>
	);
};

export default Cart;
