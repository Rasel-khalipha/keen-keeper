import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-green-50 to-white text-center px-4">
			{/* Big 404 */}
			<h1 className="text-[120px] font-extrabold text-[#244D3F] leading-none">
				404
			</h1>

			{/* Title */}
			<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-2">
				Oops! Page Not Found
			</h2>

			{/* Description */}
			<p className="text-gray-500 mt-3 max-w-md">
				The page you are looking for might have been removed, had its name
				changed, or is temporarily unavailable.
			</p>

			{/* Buttons */}
			<div className="mt-6 flex gap-4">
				<Link
					to="/"
					className="px-5 py-2.5 bg-[#244D3F] text-white rounded-lg shadow hover:bg-[#1e3f34] transition"
				>
					Go Home
				</Link>

				<button
					onClick={() => window.history.back()}
					className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
				>
					Go Back
				</button>
			</div>

			{/* Extra UI */}
			<div className="mt-10 opacity-80">
				<p className="text-sm text-gray-400 italic">
					“Lost? Let’s get you back on track.”
				</p>
			</div>
		</div>
	);
};

export default ErrorPage;
