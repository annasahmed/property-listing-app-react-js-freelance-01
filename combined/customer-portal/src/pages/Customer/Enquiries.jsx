const Enquiries = () => {
	return (
		<div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-4 py-8">
			<div className="max-w-5xl mx-auto">
				{/* Title */}
				<h1 className="text-2xl font-semibold mb-6">Interested?</h1>

				{/* Form */}
				<form className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* First name */}
					<div className="flex flex-col">
						<label className="text-sm font-medium mb-1">First name</label>
						<input
							type="text"
							placeholder="First name"
							className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-color"
						/>
					</div>

					{/* Last name */}
					<div className="flex flex-col">
						<label className="text-sm font-medium mb-1">Last name</label>
						<input
							type="text"
							placeholder="Last name"
							className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-color"
						/>
					</div>

					{/* Phone number */}
					<div className="flex flex-col md:col-span-2">
						<label className="text-sm font-medium mb-1">Phone number</label>
						<div className="flex">
							<span className="flex items-center gap-2 rounded-l-md border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 px-3 text-sm">
								pk +92
							</span>
							<input
								type="tel"
								placeholder="5xxxxxxxx"
								className="flex-1 rounded-r-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-color"
							/>
						</div>
					</div>

					{/* Email */}
					<div className="flex flex-col md:col-span-2">
						<label className="text-sm font-medium mb-1">Email</label>
						<input
							type="email"
							placeholder="Email"
							className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-color"
						/>
					</div>

					{/* Type of inquiry */}
					<div className="flex flex-col">
						<label className="text-sm font-medium mb-1">Type of inquiry</label>
						<select className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-color">
							<option>Select an item...</option>
							<option>Buying</option>
							<option>Renting</option>
							<option>Investment</option>
						</select>
					</div>

					{/* City */}
					<div className="flex flex-col">
						<label className="text-sm font-medium mb-1">City</label>
						<select className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 px-3 py-2 focus:outline-none/ focus:ring-2 focus:ring-primary-color">
							<option>Select City</option>
							<option>Karchi</option>
							<option>Lahore</option>
							<option>Quetta</option>
							<option>Peshawar</option>
						</select>
					</div>

					{/* Project */}
					<div className="flex flex-col md:col-span-2">
						<label className="text-sm font-medium mb-1">Project</label>
						<input
							type="text"
							placeholder="Enter project name"
							className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-color"
						/>
					</div>

					{/* Submit Button */}
					<div className="md:col-span-2">
						<button
							type="submit"
							className="w-full md:w-auto rounded-md bg-primary-color text-white px-6 py-2 font-medium hover:bg-primary-color/80 transition">
							Submit Inquiry
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Enquiries;
