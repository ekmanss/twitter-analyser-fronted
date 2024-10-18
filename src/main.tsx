import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import DashboardLayout from "./layouts/dashboard-layout";
// Import the layouts
import RootLayout from "./layouts/root-layout";

// Import the components
import IndexPage from "./routes";
import ContactPage from "./routes/contact";
import DashboardPage from "./routes/dashboard";
import InvoicesPage from "./routes/dashboard.invoices";
import KolRank from "./routes/kolrank";
import SignInPage from "./routes/sign-in";
import SignUpPage from "./routes/sign-up";
import KolRankInputPage from "./routes/kolrank-input";
import GolddogPage from "./routes/golddog";

const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{ path: "/", element: <KolRankInputPage /> },
			{ path: "/contact", element: <ContactPage /> },
			{ path: "/sign-in/*", element: <SignInPage /> },
			{ path: "/sign-up/*", element: <SignUpPage /> },
			{
				element: <DashboardLayout />,
				path: "dashboard",
				children: [
					{ path: "/dashboard", element: <DashboardPage /> },
					{ path: "/dashboard/invoices", element: <InvoicesPage /> },
				],
			},
			{ path: "/kolrank", element: <KolRank /> },
			{ path: "/golddog", element: <GolddogPage /> },
			{ path: "/kolrankdatainput", element: <KolRankInputPage /> },
		],
	},
]);

const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	);
} else {
	console.error("Root element not found");
}
