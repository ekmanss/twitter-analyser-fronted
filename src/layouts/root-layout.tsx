import * as React from "react";
import {
	ClerkProvider,
} from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}

export default function RootLayout() {
	const navigate = useNavigate();

	return (
		<ClerkProvider
			routerPush={(to) => navigate(to)}
			routerReplace={(to) => navigate(to, { replace: true })}
			publishableKey={PUBLISHABLE_KEY}
		>
			<header className="header">
				{/*<div>*/}
				{/*	<div>*/}
				{/*		<p>Clerk + React + React Router App</p>*/}
				{/*	</div>*/}
				{/*	<SignedIn>*/}
				{/*		<UserButton />*/}
				{/*	</SignedIn>*/}
				{/*	<SignedOut>*/}
				{/*		<Link to="/sign-in">Sign In</Link>*/}
				{/*	</SignedOut>*/}
				{/*</div>*/}

				{/*<div*/}
				{/*	className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">*/}
				{/*	<nav className="flex h-14 items-center justify-between px-4">*/}
				{/*		<div className="hidden lg:block">*/}
				{/*		</div>*/}

				{/*		<div className="flex items-center gap-2">*/}
				{/*				<SignedIn>*/}
				{/*					<UserButton />*/}
				{/*				</SignedIn>*/}
				{/*				<SignedOut>*/}
				{/*					<Link to="/sign-in">Sign In</Link>*/}
				{/*				</SignedOut>*/}
				{/*		</div>*/}
				{/*	</nav>*/}
				{/*</div>*/}
			</header>
			<main>
				<Outlet />
			</main>
		</ClerkProvider>
	);
}
