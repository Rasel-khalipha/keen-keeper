import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage/HomePage";
import RootLayout from "../layout/RootLayout";
import TimeLine from "../pages/Timeline/TimeLine";
import Stats from "../pages/Stats/Stats";
import FriendsDetails from "../pages/FriendsDetails/FriendsDetails";
import { Atom } from "react-loading-indicators";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		hydrateFallbackElement: (
			<div className="min-h-screen flex items-center justify-center bg-white">
				<Atom color="#32cd32" size="medium" text="" textColor="" />
			</div>
		),
		children: [
			{
				index: true,
				Component: HomePage,
				loader: async () => {
					const res = await fetch("/friends.json");
					return res.json();
				},
			},
			{
				path: "/friendDetails/:id",
				Component: FriendsDetails,
				loader: async () => {
					const res = await fetch("/friends.json");
					return res.json();
				},
			},

			{ path: "/timeline", Component: TimeLine },
			{ path: "/stats", Component: Stats },
		],
	},
]);
