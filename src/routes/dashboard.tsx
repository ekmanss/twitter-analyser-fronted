import { Link } from "react-router-dom";
import Header from "@/components/layout/header";

export default function DashboardPage() {
	return (
		<>
			<Header/>
			<div className="flex h-screen overflow-hidden">
				{/*<Sidebar/>*/}
				{/*<main className="flex-1 overflow-hidden pt-16">{children}</main>*/}

				<div>
					<h1>Dashboard page</h1>
					<p>This is a protected page.</p>

					<ul>
						<li>
							<Link to="/dashboard/invoices">Invoices</Link>
						</li>
						<li>
							<Link to="/">Return to index</Link>
						</li>
					</ul>
				</div>
			</div>


		</>
	);
}
