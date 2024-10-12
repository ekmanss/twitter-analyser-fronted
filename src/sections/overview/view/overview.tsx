import PageContainer from "@/components/layout/page-container";
import { Link } from "react-router-dom";

export default function OverViewPage() {
	return (
		<PageContainer scrollable>
			<div className="space-y-2">
				<div className="flex items-center justify-between space-y-2">
					<h2 className="text-2xl font-bold tracking-tight">
						Hi, Welcome back！！！！ 👋
					</h2>
				</div>
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
		</PageContainer>
	);
}
