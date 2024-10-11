import { generateRepoContext } from "ekmanss-js-tools";

async function main() {
	const params = {
		repoPath: "/Users/linchuan/WebstormProjects/next-shadcn-dashboard-starter",
		outputFile: "output.md",
		options: {
			treeIgnorePatterns: ["**/.git/**"],
			contentIgnorePatterns: [
				"**/ui/**",
				"**/.git/**",
				"**/*.lock",
				"**/*.svg",
				"**/*.ico",
				".github/**",
				"README.md",
				"LICENSE",
				"pnpm-lock.yaml",
			],
		},
	};

	const repoContext = generateRepoContext(params);
}

main();
