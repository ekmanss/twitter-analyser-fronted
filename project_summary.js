import { generateRepoContext } from "ekmanss-js-tools";

async function main() {
	const params = {
		repoPath: "/Users/linchuan/temp/clerk-react",
		outputFile: "output15.md",
		options: {
			treeIgnorePatterns: [],
			contentIgnorePatterns: [
				"**/*.lock",
				"**/*.svg",
				".github/",
				"README.md",
				"LICENSE",
			],
		},
	};

	const repoContext = generateRepoContext(params);
}

main();
