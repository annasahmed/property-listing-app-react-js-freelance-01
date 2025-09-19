const data = [
	{
		severity: "MINOR",
		message: "Cooling Tower's supply water ten",
		asset: "YLS-FL30_CHILLER-01",
		lastOccurred: "03/12/21 10:40 PM",
		category: "Hvac",
		lastReported: "03/13/21 10:40 PM",
		count: 2358,
	},
	{
		severity: "MAJOR",
		message: "Low suction pressure in Chiller",
		asset: "YLS-FL30_CHILLER-01",
		lastOccurred: "03/12/21 10:40 PM",
		category: "Hvac",
		lastReported: "03/13/21 10:40 PM",
		count: 1829,
	},
	{
		severity: "MINOR",
		message: "Temperature difference between",
		asset: "YLS-FL30_CHILLER-01",
		lastOccurred: "03/12/21 10:40 PM",
		category: "Hvac",
		lastReported: "03/13/21 10:40 PM",
		count: 1990,
	},
	{
		severity: "MAJOR",
		message: "FAHU - Supply air is over cooled",
		asset: "LA2-2F-FAHU 2",
		lastOccurred: "03/10/21 09:00 PM",
		category: "Hvac",
		lastReported: "03/13/21 10:00 PM",
		count: 561,
	},
	{
		severity: "MINOR",
		message: "Cooling Actuator is Faulty Open",
		asset: "CD-F1-FAHU",
		lastOccurred: "03/09/21 05:00 AM",
		category: "Hvac",
		lastReported: "03/13/21 10:00 PM",
		count: 63,
	},
	{
		severity: "CRITICAL",
		message: "Low Chilled Water Delta T",
		asset: "KTB-5AB-Chiller-3",
		lastOccurred: "12/03/20 04:40 PM",
		category: "Hvac",
		lastReported: "01/11/21 01:40 PM",
		count: 2,
	},
	{
		severity: "CRITICAL",
		message: "Low Chilled Water Delta T",
		asset: "KTB-5AB-Chiller-2",
		lastOccurred: "01/04/21 07:00 PM",
		category: "Hvac",
		lastReported: "01/11/21 01:40 PM",
		count: 2,
	},
	{
		severity: "CRITICAL",
		message: "Elevator Operational Distance >",
		asset: "KTA-Passenger Elevator",
		lastOccurred: "12/14/20 01:15 PM",
		category: "---",
		lastReported: "12/31/20 11:45 PM",
		count: 1,
	},
	{
		severity: "CRITICAL",
		message: "Elevator Operational Distance >",
		asset: "KTA-Service Elevator 01",
		lastOccurred: "12/14/20 01:15 PM",
		category: "---",
		lastReported: "12/31/20 11:45 PM",
		count: 1,
	},
	{
		severity: "CRITICAL",
		message: "Elevator Operational Distance >",
		asset: "KTA-Passenger Elevator",
		lastOccurred: "12/13/20 12:15 PM",
		category: "---",
		lastReported: "12/31/20 11:45 PM",
		count: 1,
	},
	{
		severity: "CRITICAL",
		message: "Elevator Operational Distance >",
		asset: "KTA-Passenger Elevator",
		lastOccurred: "12/14/20 08:15 AM",
		category: "---",
		lastReported: "12/31/20 11:45 PM",
		count: 1,
	},
];

const severityColors = {
	MINOR: "bg-yellow-500 text-white",
	MAJOR: "bg-orange-400 text-white",
	CRITICAL: "bg-red-500 text-white",
};

const AmbulanceTable = () => {
	return (
		<div className="p-4 sm:p-6 rounded-lg">
			{/* Desktop / Tablet View */}
			<div className="hidden md:block overflow-x-auto rounded-lg shadow">
				<table className="min-w-full rounded-lg bg-white dark:bg-gray-900 text-sm border border-border-color">
					<thead>
						<tr className="text-left text-xs font-medium text-gray-600 dark:text-gray-300 border-b border-border-color uppercase tracking-wider">
							<th className="px-4 py-5">Severity</th>
							<th className="px-4 py-5">Message</th>
							<th className="px-4 py-5">Space / Asset</th>
							<th className="px-4 py-5">Last Occurred Time</th>
							<th className="px-4 py-5">Category</th>
							<th className="px-4 py-5">Last Reported</th>
							<th className="px-4 py-5">#</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-sm">
						{data.map((row, index) => (
							<tr
								key={index}
								className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
								<td className="px-4 py-3">
									<span
										className={`px-3 py-1 rounded-full text-[10px] font-semibold ${
											severityColors[row.severity]
										}`}>
										{row.severity}
									</span>
								</td>
								<td className="text-[13px] px-4 py-3 font-medium text-gray-700 dark:text-gray-200">
									{row.message}
								</td>
								<td className="text-[13px] px-4 py-3 text-gray-600 dark:text-gray-300">
									{row.asset}
								</td>
								<td className="text-[13px] px-4 py-3 text-gray-600 dark:text-gray-300">
									{row.lastOccurred}
								</td>
								<td className="text-[13px] px-4 py-3 text-gray-600 dark:text-gray-300">
									{row.category}
								</td>
								<td className="text-[13px] px-4 py-3 text-gray-600 dark:text-gray-300">
									{row.lastReported}
								</td>
								<td className="text-[13px] px-4 py-3 text-center text-gray-700 dark:text-gray-200">
									{row.count}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Mobile View */}
			<div className="block md:hidden space-y-4">
				{data.map((row, index) => (
					<div
						key={index}
						className="bg-white dark:bg-gray-900 rounded-lg shadow border border-border-color p-4 text-sm space-y-2">
						<div className="flex justify-between items-center">
							<span
								className={`px-3 py-1 rounded-full text-[10px] font-semibold ${
									severityColors[row.severity]
								}`}>
								{row.severity}
							</span>
							<span className="text-xs text-gray-500 dark:text-gray-400">
								#{row.count}
							</span>
						</div>
						<p className="font-medium text-gray-800 dark:text-gray-200">
							{row.message}
						</p>
						<div className="grid grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-400">
							<p>
								<span className="font-semibold">Asset: </span>
								{row.asset}
							</p>
							<p>
								<span className="font-semibold">Category: </span>
								{row.category}
							</p>
							<p>
								<span className="font-semibold">Occurred: </span>
								{row.lastOccurred}
							</p>
							<p>
								<span className="font-semibold">Reported: </span>
								{row.lastReported}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AmbulanceTable;
