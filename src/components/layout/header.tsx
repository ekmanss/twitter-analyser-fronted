import { UserNav } from './user-nav';
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/clerk-react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Header() {
    return (
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

            <div
                className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
                <nav className="flex h-14 items-center justify-between px-4">
                    <div className="hidden lg:block">
                    </div>

                    <div className="flex items-center gap-2">
                        <SignedIn>
                            <UserButton/>
                        </SignedIn>
                        <SignedOut>
                            <Link to="/sign-in">Sign In</Link>
                        </SignedOut>
                    </div>
                </nav>
            </div>

        </header>
    );
}
