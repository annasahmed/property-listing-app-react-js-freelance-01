import { Link } from "react-router-dom";

const ComingSoon = () => {
	return (
		<main className="w-full h-[79.9vh] dark:h-[80vh] flex flex-col justify-center gap-10 items-center bg-white dark:bg-gray-900">
			<h1 className="font-serif text-7xl font-medium dark:text-gray-100">
				Coming Soon
			</h1>
			<Link to={"/"}>
				<button className="bg-primary-color/80 hover:bg-primary-color/60 text-white px-3 md:px-6 py-2 rounded-sm transition-colors text-xs md:text-sm">
					BACK TO HOME
				</button>
			</Link>
		</main>
	);
};

export default ComingSoon;
