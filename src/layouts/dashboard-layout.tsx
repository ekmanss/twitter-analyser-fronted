import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { useAuth } from "@clerk/clerk-react";
import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function DashboardLayout() {
	const { userId, isLoaded } = useAuth();
	const navigate = useNavigate();

	console.log("test", userId);

	React.useEffect(() => {
		if (isLoaded && !userId) {
			navigate("/sign-in");
		}
	}, [isLoaded, userId, navigate]);

	if (!isLoaded) return "Loading...";

	return (
		<div className="flex">
			<Sidebar />
			<main className="w-full flex-1 overflow-hidden">
				<Header />
				<Outlet />
			</main>
		</div>
	);
}
