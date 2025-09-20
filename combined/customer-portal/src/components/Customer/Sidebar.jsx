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
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const items = [
	{
		Icon: Building2,
		route: "/",
	},
	{
		Icon: ShoppingBag,
		route: "/cart",
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
		route: "/ambulance",
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
		<aside className="w-fit border border-r border-border-color h-screen flex flex-col gap-7 px-3 py-4">
			{items.map((item, index) => (
				<button
					key={index}
					onClick={() => {
						if (item.route) {
							navigate(item.route);
						}
					}}>
					<item.Icon
						className={`hover:text-secondary-color w-5.5 h-5.5 cursor-pointer ${
							location.pathname === item.route
								? "text-secondary-color"
								: "text-gray-400/70 "
						}`}
					/>
				</button>
			))}
			<Settings className="hover:text-secondary-color text-gray-400/70 w-5.5 h-5.5" />
		</aside>
	);
};

export default Sidebar;
