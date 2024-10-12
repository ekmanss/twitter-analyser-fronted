import { useAuth } from "@clerk/clerk-react";
import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

// export default function DashboardLayout() {
// 	const { userId, isLoaded } = useAuth();
// 	const navigate = useNavigate();
//
// 	console.log("test", userId);
//
// 	React.useEffect(() => {
// 		if (isLoaded && !userId) {
// 			navigate("/sign-in");
// 		}
// 	}, [isLoaded, userId, navigate]);
//
// 	if (!isLoaded) return "Loading...";
//
// 	return <Outlet />;
// }

// This becomes your layout component
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
		<>
			<Header />
			<div className="flex h-screen overflow-hidden">
				<Sidebar />
				<main className="flex-1 overflow-y-auto pt-16">
					<Outlet />
				</main>
			</div>
		</>
	);
}
