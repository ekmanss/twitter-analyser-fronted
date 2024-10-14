import type { NavItem } from "@/types";

export type Employee = {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	gender: string;
	date_of_birth: string; // Consider using a proper date type if possible
	street: string;
	city: string;
	state: string;
	country: string;
	zipcode: string;
	longitude?: number; // Optional field
	latitude?: number; // Optional field
	job: string;
	profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export type Product = {
	photo_url: string;
	name: string;
	description: string;
	created_at: string;
	price: number;
	id: number;
	category: string;
	updated_at: string;
};

export const navItems: NavItem[] = [
	{
		title: "Dashboard",
		href: "/dashboard",
		icon: "dashboard",
		label: "Dashboard",
	},
	{
		title: "Invoices",
		href: "/dashboard/invoices",
		icon: "user",
		label: "invoices",
	},
	{
		title: "Product",
		href: "/dashboard/product",
		icon: "product",
		label: "product",
	},
	{
		title: "Account",
		icon: "user",
		label: "account",
		children: [
			{
				title: "Profile",
				href: "/dashboard/profile",
				icon: "userPen",
				label: "profile",
			},
			{
				title: "Login",
				href: "/",
				icon: "login",
				label: "login",
			},
		],
	},
	{
		title: "KolRank",
		href: "/kolrank",
		icon: "kanban",
		label: "kanban",
	},
	{
		title: "KolRankDataInput",
		href: "/kolrankdatainput",
		icon: "kanban",
		label: "kanban",
	},
];
