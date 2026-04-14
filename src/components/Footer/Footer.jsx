import React from "react";
import footerImg from "../../assets/logo-xl.png";
import { Link, Links } from "react-router";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
	return (
		<>
			<div className="bg-[#244D3F] pt-20">
				<footer className="footer footer-horizontal footer-center text-primary-content px-10 gap-6  w-[73%] mx-auto">
					<aside className="">
						<img src={footerImg} alt="footerImg" />
						<p className="font-normal text-base mt-4">
							Your personal shelf of meaningful connections. Browse, tend, and
							nurture the relationships that matter most.
						</p>
					</aside>
					<nav className="">
						<h3 className="font-medium text-xl mb-4">Social Links</h3>
						<div className="grid grid-flow-col gap-4 text-xl">
							<Link
								className="w-10 h-10 bg-white rounded-full text-black flex justify-center items-center"
								to={"/"}
							>
								<AiFillInstagram />
							</Link>
							<Link
								className="w-10 h-10 bg-white rounded-full text-black flex justify-center items-center"
								to={"/"}
							>
								<FaSquareFacebook />
							</Link>
							<Link
								className="w-10 h-10 bg-white rounded-full text-black flex justify-center items-center"
								to={"/"}
							>
								<FaXTwitter />
							</Link>
						</div>
					</nav>

					<div className="w-full flex justify-between items-center border-t border-[#1A8862]/20 py-7.5 mt-10">
						<p className="text-[#FAFAFA]/50 font-normal text-base">
							&copy; {new Date().getFullYear()} - All right reserved
						</p>
						<nav className="text-[#FAFAFA]/50 font-normal text-base flex items-center gap-15">
							<Link to={"/"}>Privacy Policy</Link>
							<Link to={"/"}>Terms of Service</Link>
							<Link to={"/"}>Cookies</Link>
						</nav>
					</div>
				</footer>
			</div>
		</>
	);
};

export default Footer;
