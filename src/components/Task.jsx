import PropTypes from "prop-types";
import Dropdown from "./Dropdown";

const Task = ({ item, onCompleted, changePriority, optionsPriority }) => {
	const handleOnSelect = (value) => {
		changePriority(item.id, parseInt(value));
	};

	const handleChangeOnComplete = (e) => {
		onCompleted(item.id); 
		e.target.checked = !item.completed
	}

	return (
		<li style={{width: "35%", border: "solid 1px #000", padding: "0 30px"}}>
			<p style={{ textDecoration: item.completed ? "line-through" : "none" }}>
				Tarea: {item.text}
			</p>
			<span>Estado: {item.completed ? "Completado" : "Incompleto"}</span> 
			<input type="checkbox" checked={item.completed} onChange={handleChangeOnComplete}></input>
			<p>
				<span>Prioridad: </span>
				<Dropdown
					name="priority"
					options={optionsPriority}
					onSelect={handleOnSelect}
					defaultValue={item.priority}
				/>
			</p>
			
		</li>
	);
};

Task.propTypes = {
	item: PropTypes.object.isRequired,
	onCompleted: PropTypes.func.isRequired,
	changePriority: PropTypes.func.isRequired,
	optionsPriority: PropTypes.array.isRequired
};

export default Task;
