import PropTypes from "prop-types";
import Dropdown from "./Dropdown";

const Task = ({ item, onCompleted, changePriority }) => {
	const optionsPriority = [
		{ id: 1, value: "1", name: "Urgente" },
		{ id: 2, value: "2", name: "Normal" },
		{ id: 3, value: "3", name: "Baja" },
	];

	const handleOnSelect = (value) => {
		changePriority(item.id, value);
	};

	return (
		<li>
			<p style={{ textDecoration: item.completed ? "line-through" : "none" }}>
				Tarea: {item.text}
			</p>
			<p>Estado: {item.completed ? "Completado" : "Incompleto"}</p>
			<p>
				<span>Prioridad: </span>
				<Dropdown
					name="priority"
					options={optionsPriority}
					onSelect={handleOnSelect}
					defaultValue={item.priority}
				/>
			</p>
			<input type="checkbox" onClick={() => onCompleted(item.id)}></input>
		</li>
	);
};

Task.propTypes = {
	item: PropTypes.object.isRequired,
	onCompleted: PropTypes.func.isRequired,
	changePriority: PropTypes.func.isRequired,
};

export default Task;
