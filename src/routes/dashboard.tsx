import * as React from 'react';
import { Link, Outlet } from "react-router-dom";
import { ScrollArea } from '@/components/ui/scroll-area';
import Header from "@/components/layout/header";
// import Sidebar from "@/components/layout/sidebar";


// This becomes your dashboard page component
export function DashboardPage() {
	return (
		<ScrollArea className="h-full">
			<div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
				<div className="flex items-center justify-between space-y-2">
					<h2 className="text-3xl font-bold tracking-tight">
						Hi, Welcome back 👋
					</h2>
					{/*<ul className="space-y-2">*/}
					{/*	<li>*/}
					{/*		<Link to="/dashboard/invoices" className="text-blue-600 hover:underline">Invoices</Link>*/}
					{/*	</li>*/}
					{/*	<li>*/}
					{/*		<Link to="/" className="text-blue-600 hover:underline">Return to index</Link>*/}
					{/*	</li>*/}
					{/*</ul>*/}
				</div>
			</div>
		</ScrollArea>


	// <div className="p-4">
	// 	<h1 className="text-2xl font-bold mb-4">Dashboard page</h1>
	// 	<p className="mb-4">This is a protected page.</p>
	//
	// 	<ul className="space-y-2">
	// 		<li>
	// 			<Link to="/dashboard/invoices" className="text-blue-600 hover:underline">Invoices</Link>
	// 			</li>
	// 			<li>
	// 				<Link to="/" className="text-blue-600 hover:underline">Return to index</Link>
	// 			</li>
	// 		</ul>
	// 	</div>
	);
}