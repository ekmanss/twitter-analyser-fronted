import * as React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function IndexPage() {
	return (
		<div>
			<h1>This is the index page</h1>
			<div>
				<ul>
					<li>
						<Link to="/sign-up">
							<Button variant="outline">Sign Up</Button>
						</Link>
					</li>
					<li>
						<Link to="/sign-in">
							<Button>Sign In</Button>
						</Link>
					</li>
					<li>
						<Link to="/contact">
							<Button variant="secondary">Contact</Button>
						</Link>
					</li>
					<li>
						<Link to="/dashboard">
							<Button variant="destructive">Dashboard</Button>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
