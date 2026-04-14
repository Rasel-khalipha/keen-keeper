import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage/HomePage";
import RootLayout from "../layout/RootLayout";
import TimeLine from "../pages/Timeline/TimeLine";
import Stats from "../pages/Stats/Stats";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: HomePage,
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
