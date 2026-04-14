import React from "react";
import { Link, NavLink } from "react-router";
import { RiHome2Line } from "react-icons/ri";
import { RiTimeLine } from "react-icons/ri";
import { PiChartLine } from "react-icons/pi";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
	const navItem = [
		{
			path: "/",
			text: "Home",
			icon: <RiHome2Line />,
		},
		{
			path: "/timeline",
			text: "Timeline",
			icon: <RiTimeLine />,
		},
		{
			path: "/stats",
			text: "Stats",
			icon: <PiChartLine />,
		},
	];
	return (
		<>
			<div className="bg-white shadow-sm">
				<div className="navbar mx-auto w-[93.4%]">
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost lg:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									{" "}
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>{" "}
								</svg>
							</div>
							<ul
								tabIndex="-1"
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
							>
								{navItem.map((item) => (
									<li key={item.path}>
										<NavLink
											to={item.path}
											className="hover:bg-[#244D3F] hover:text-white transition duration-500 font-medium text-base text-[#64748B]"
										>
											{item.icon} {item.text}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
						<Link to={"/"} className="text-xl">
							<img src={logoImg} alt="KeenKeeper" />
						</Link>
					</div>
					<div className="navbar-end hidden lg:flex">
						<ul className="menu menu-horizontal px-1">
							{navItem.map((item) => (
								<li key={item.path}>
									<NavLink
										to={item.path}
										className="hover:bg-[#244D3F] hover:text-white transition duration-500 font-medium text-base text-[#64748B]"
									>
										{item.icon} {item.text}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
