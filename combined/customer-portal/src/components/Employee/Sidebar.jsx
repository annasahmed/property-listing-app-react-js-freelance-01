import {
	Building2,
	Ellipsis,
	NotebookText,
	ReceiptText,
	Settings,
	ShoppingBag,
	Siren,
	SquareKanban,
	SquareScissors,
	UserRound,
	UsersRound,
	Zap,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
	{
		Icon: Building2,
		route: "/employee",
	},
	{
		Icon: ShoppingBag,
		route: "/employee/cart",
	},
	{
		Icon: SquareScissors,
		// route: "building",
	},
	{
		Icon: Zap,
		// route: "building",
	},
	{
		Icon: SquareKanban,
		// route: "building",
	},
	{
		Icon: Siren,
		route: "/employee/ambulance",
	},
	{
		Icon: UserRound,
	},
	{
		Icon: ReceiptText,
		// route: "building",
	},
	{
		Icon: UsersRound,
		// route: "building",
	},
	{
		Icon: NotebookText,
		// route: "building",
	},
	{
		Icon: Ellipsis,
		// route: "building",
	},
];

const Sidebar = () => {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<aside className="w-fit h-screen flex flex-col gap-7 px-3 py-4 border-r border-border-color dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors">
			{items.map((item, index) => (
				<button
					key={index}
					onClick={() => {
						if (item.route) navigate(item.route);
					}}>
					<item.Icon
						className={`w-5.5 h-5.5 cursor-pointer transition-colors ${
							location.pathname === item.route
								? "text-secondary-color"
								: "text-gray-400/70 dark:text-gray-400 hover:text-secondary-color"
						}`}
					/>
				</button>
			))}

			<Settings className="w-5.5 h-5.5 text-gray-400/70 dark:text-gray-400 hover:text-secondary-color cursor-pointer transition-colors" />
		</aside>
	);
};

export default Sidebar;
