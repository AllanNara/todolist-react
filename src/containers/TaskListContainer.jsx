import { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import fetchTasks from "../utils/fake-data";
import Dropdown from "../components/Dropdown";
import Filter from "./Filter";

const TaskListContainer = () => {
	const [tasks, setTasks] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetchTasks("success")
			.then((result) => setTasks(result))
			.catch((err) => console.log("Ocurrio un error!\n", err))
			.finally(() => setLoading(false));
	}, []);

	const handleChangeState = (id) => {
		const updatedTasks = tasks.map((task) => {
			if (task.id === id) return { ...task, completed: !task.completed };
			else return task;
		});

		setTasks(updatedTasks);
	};

	const handleChangePriority = (id, value) => {
		const updatedTasks = tasks.map((task) => {
			if (task.id === id) return { ...task, priority: value };
			else return task;
		});
		setTasks(updatedTasks);
	};

	const filterOptions = [
		{ id: 1, value: "complete", name: "Completadas" },
		{ id: 2, value: "incomplete", name: "Incompletas" },
		{ id: 3, value: "all", name: "Todas las notas" },
	];

	return loading ? (
		<h2>Cargando...</h2>
	) : (
		<main>
			<Filter filterDefault="all">
				{(filterState, handleFilterChange) => (
					<>
						<Dropdown
							name="filter"
							options={filterOptions}
							onSelect={handleFilterChange}
							defaultValue={filterState}
						/>
						<TaskList
							tasks={
								filterState === "all"
								? tasks
								: tasks.filter((task) =>
									filterState === "complete" ? task.completed : !task.completed
								)
							}
							{...{ handleChangeState, handleChangePriority }}
						/>
					</>
				)}
			</Filter>
		</main>
	);
};

export default TaskListContainer;
