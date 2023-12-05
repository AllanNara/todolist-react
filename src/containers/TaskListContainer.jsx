import TaskList from "../components/TaskList";
import Dropdown from "../components/Dropdown";
import Filter from "./Filter";
import { updateTask } from "../services/task";
import useStore from "../hooks/useStore";
import { Link } from "react-router-dom";

const TaskListContainer = () => {
	const { tasks, priorities, loading, setTasks } = useStore();

	const handleChangeState = async (id) => {
		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				let updated = !task.completed;
				updateTask(id, { completed: updated });
				return { ...task, completed: updated };
			} else return task;
		});

		setTasks(updatedTasks);
	};

	const handleChangePriority = (id, value) => {
		updateTask(id, { priority: value });

		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				return { ...task, priority: value };
			} else return task;
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
							optionsPriority={priorities}
							{...{ handleChangeState, handleChangePriority }}
						/>
					</>
				)}
			</Filter>
			<Link to={"/tasks/create"}>
				<button style={{position: "absolute", bottom: 25, right: 25, padding: 10, backgroundColor: "#bbb"}}>¡Crear una nueva tarea!</button>
			</Link>
		</main>
	);
};

export default TaskListContainer;
