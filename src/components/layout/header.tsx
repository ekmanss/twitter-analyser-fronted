import * as React from "react";
import {
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/clerk-react";
import { Link} from "react-router-dom";

export default function Header() {
	return (
		<header className="sticky inset-x-0 top-0 w-full">
			<nav className="flex items-center justify-between px-4 py-2 md:justify-end">
				<div className="flex items-center gap-2">
					<SignedIn>
						<UserButton />
					</SignedIn>
					<SignedOut>
						<Link to="/sign-in">Sign In</Link>
					</SignedOut>
				</div>
			</nav>
		</header>
	);
}
