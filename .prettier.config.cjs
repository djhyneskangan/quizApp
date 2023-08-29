module.exports =
{
	useTabs: true,
	singleQuote: true,
	trailingComma: "none",
	printWidth: 100,
	plugins: ["prettier-plugin-svelte"],
	pluginSearchDirs: ["."],
	overrides: [{ "files": "*.svelte", "options": { "parser": "svelte" } }],
	plugins: ['prettier-plugin-tailwindcss'],

}
