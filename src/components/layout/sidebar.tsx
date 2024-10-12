import * as React from "react";
import { useSidebar } from "@/hooks/useSidebar";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";

type SidebarProps = {
	className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
	const { isMinimized, toggle } = useSidebar();

	const handleToggle = () => {
		toggle();
	};

	return (
		<aside
			className={cn(
				`relative  hidden h-screen flex-none border-r bg-card transition-[width] duration-500 md:block`,
				!isMinimized ? "w-72" : "w-[72px]",
				className,
			)}
		>
			<ChevronLeft
				className={cn(
					"absolute -right-3 top-10 z-50  cursor-pointer rounded-full border bg-background text-3xl text-foreground",
					isMinimized && "rotate-180",
				)}
				onClick={handleToggle}
			/>
		</aside>
	);
}
