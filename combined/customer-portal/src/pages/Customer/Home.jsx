import React from "react";
import houseImage from "../../assets/house.jpg";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<main
			className="relative w-full h-[79.9vh] dark:h-[80vh] max-md:h-[75vh] flex flex-col py-20 max-md:py-15 bg-cover bg-center bg-no-repeat justify-end"
			style={{
				backgroundImage: `url(${houseImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}>
			<div className="w-full h-full absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
			<div className="relative md:max-w-6xl mx-auto w-full max-md:w-[85%]">
				<section className="flex flex-col gap-2 text-white">
					<p className="text-base text-white/80">WELCOME TO TBAR HOLDING</p>
					<h1 className="text-5xl max-md:text-3xl md:leading-[56px] md:w-1/2">
						Explore Our Collection Of Luxury Dream Home
					</h1>
					<Link
						to={"/search"}
						className="text-lg flex gap-5 items-center cursor-pointer hover:gap-7 hover:underline">
						Discover Our Properties <ChevronRight className="w-5 h-5 mt-1" />
					</Link>
				</section>
			</div>

			{/* <img src={houseImage} alt="" /> */}
		</main>
	);
};

export default Home;
