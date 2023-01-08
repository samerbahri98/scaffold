import { NodePlopAPI } from "plop";

export default function (plop: NodePlopAPI) {
	plop.setGenerator("publicRoute", {
		description: "public Route",
		prompts: [
			{
				type: "input",
				name: "uri",
				message: "route uri please",
			},
			{
				type: "input",
				name: "page",
				message: "route page please",
			},
		],
		actions: [
			{
				type: "modify",
				path: "src/Router.tsx",
			},
		],
	});
	plop.setGenerator("page", {
		description: "react page",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "page name please",
			},
			{
				type: "input",
				name: "route",
				message: "page route please",
			},
		],
		actions: [
			{
				type: "add",
				path: "src/pages/{{name}}.js",
				templateFile: "templates/page.hbs",
			},
		],
	});
}
