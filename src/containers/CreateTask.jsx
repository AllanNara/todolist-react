import { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import useAuth from "../hooks/useAuth";
import { createTask } from "../services/task";
import useStore from '../hooks/useStore'
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  const navigate = useNavigate();
  const { priorities, setReload } = useStore();
	const { user } = useAuth();
	const [task, setTask] = useState({
		text: "",
		priority: 2,
    completed: false, 
    user: user.uid
	});
  const [send, setSend] = useState(false)

  useEffect(() => {
    return () => {
      setSend(false);
      setTask({
        text: "",
        priority: 2,
        completed: false, 
        user: user.uid
      })
    }
  }, [user])

  const handleChange = (field) => {
    return (value) => {
      let setValue = value
      if(!isNaN(parseInt(value))) setValue = parseInt(value)
      setTask({ ...task, [field]: setValue }) 
    }
  };


  const handleSubmit = async(e) => { 
    e.preventDefault();
    try {
      setSend(true)
      await createTask(task);
      setReload(true);
      navigate('/tasks');
    } catch(error) {
      console.log(error)
    }
  }

	return (
		<>
			<form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column"}}>
				<label htmlFor="task">Nueva nota: </label>
        <textarea name="task" id="task" cols="30" rows="10" value={task.text} onChange={(e) => handleChange("text")(e.target.value)} disabled={send}></textarea>
				<label htmlFor="priority">Prioridad de la nueva nota: </label>
				<Dropdown
					name="priority"
					options={priorities}
					onSelect={handleChange("priority")}
					defaultValue={task.priority}
				/>
        <input disabled={send} type="submit" value="Crear nueva nota" style={{ marginTop: 10 }}/>
			</form>
		</>
	);
};
export default CreateTask;
