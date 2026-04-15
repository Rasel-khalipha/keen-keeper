import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import { Atom } from "react-loading-indicators";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const hydrateFallback = (
	<div className="min-h-screen flex items-center justify-center bg-white">
		<Atom color="#244D3F" size="medium" text="" textColor="" />
	</div>
);

export const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		hydrateFallbackElement: hydrateFallback,
		children: [
			{
				index: true,
				lazy: async () => {
					const module = await import("../pages/HomePage/HomePage");
					return { Component: module.default };
				},
				loader: async () => {
					const res = await fetch("/friends.json");
					return res.json();
				},
				hydrateFallbackElement: hydrateFallback,
			},
			{
				path: "/friendDetails/:id",
				lazy: async () => {
					const module = await import("../pages/FriendsDetails/FriendsDetails");
					return { Component: module.default };
				},
				loader: async () => {
					const res = await fetch("/friends.json");
					return res.json();
				},
				hydrateFallbackElement: hydrateFallback,
			},

			{
				path: "/timeline",
				lazy: async () => {
					const module = await import("../pages/Timeline/TimeLine");
					return { Component: module.default };
				},
				hydrateFallbackElement: hydrateFallback,
			},
			{
				path: "/stats",
				lazy: async () => {
					const module = await import("../pages/Stats/Stats");
					return { Component: module.default };
				},
				hydrateFallbackElement: hydrateFallback,
			},
		],
		errorElement: <ErrorPage />,
	},
]);
