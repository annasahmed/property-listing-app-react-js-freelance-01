import AmbulanceTable from "../components/AmbulanceTable";
import TopBar from "../components/TopBar";

const Ambulance = () => {
	return (
		<main className="flex h-screen overflow-hidden ">
			<section className="w-full overflow-auto mb-12">
				<TopBar />
				<AmbulanceTable />
			</section>
		</main>
	);
};

export default Ambulance;
