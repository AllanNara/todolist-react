const tasks = [
	{
		text: "making ourselves sense follow string have not lucky show mental cave bear event wall ...",
		completed: false,
		id: 1,
		priority: "2"
	},
	{
		text: "wheel perfectly exactly more cloth gray kind each rabbit meal scale rod further amount ...",
		completed: false,
		id: 2,
		priority: "2"
	},
	{
		text: "foreign remain safety consider is crop late my scientist whose brought younger card nest ...",
		completed: false,
		id: 3,
		priority: "2"
	},
	{
		text: "paint universe about page dear quietly labor aloud complete connected crew review shut characteristic ...",
		completed: false,
		id: 4,
		priority: "2"
	},
	{
		text: "dirt enough current thousand deep allow mission realize leaf recent lips death making plus ...",
		completed: false,
		id: 5,
		priority: "2"
	},
];

const fetchTasks = (success) =>
	new Promise((resolve, reject) => {
		if (success === "success") setTimeout(() => resolve(tasks), 2500);
		else setTimeout(() => reject("Error"), 2500);
	});

export default fetchTasks;
