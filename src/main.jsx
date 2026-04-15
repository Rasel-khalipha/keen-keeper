import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./Router/Router";
import { Atom } from "react-loading-indicators";
import FriendContextProvider from "./context/FriendContext/FriendContextProvider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<FriendContextProvider>
			<RouterProvider
				router={router}
				fallbackElement={
					<div className="min-h-screen flex items-center justify-center bg-white">
						<Atom color="#244D3F" size="medium" text="" textColor="" />
					</div>
				}
			/>
			<ToastContainer />
		</FriendContextProvider>
	</StrictMode>,
);
