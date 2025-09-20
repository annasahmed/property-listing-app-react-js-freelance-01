import { Link } from "react-router-dom";

const ComingSoon = () => {
	return (
		<main className="w-full h-full flex flex-col justify-center gap-10 items-center">
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
