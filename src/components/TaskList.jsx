import PropTypes from "prop-types";
import Task from "./Task";

const TaskList = ({ tasks, handleChangeState, handleChangePriority }) => {
	if (!tasks.length) {
		return <h2>No hay tareas existentes</h2>;
	}
	return (
		<section>
			<h2>Tareas:</h2>
			<ul>
				{tasks.map((task) => {
					return (
						<Task
							item={task}
							key={task.id}
							onCompleted={handleChangeState}
							changePriority={handleChangePriority}
						/>
					);
				})}
			</ul>
		</section>
	);
};

TaskList.propTypes = {
	tasks: PropTypes.array.isRequired,
	handleChangeState: PropTypes.func.isRequired,
	handleChangePriority: PropTypes.func.isRequired,
};

export default TaskList;
