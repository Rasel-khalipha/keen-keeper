import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./Router/Router";
import { Atom } from "react-loading-indicators";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider
			router={router}
			fallbackElement={
				<div className="min-h-screen flex items-center justify-center bg-white">
					<Atom color="#32cd32" size="medium" text="" textColor="" />
				</div>
			}
		/>
	</StrictMode>,
);
