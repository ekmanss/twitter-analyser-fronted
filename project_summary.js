import {generateRepoContext} from "ekmanss-js-tools";

async function main() {
    const params = {
        repoPath: "./",
        outputFile: "output.md",
        options: {
            treeIgnorePatterns: ["**/.git/**"],
            contentIgnorePatterns: ["**/.git/**", "**/*.lock", "**/*.svg", ".github/**", "README.md", "LICENSE", "pnpm-lock.yaml"],
        },
    };

    const repoContext = generateRepoContext(params);
}

main();
