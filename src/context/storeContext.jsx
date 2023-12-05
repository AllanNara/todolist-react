import { createContext, useEffect, useState } from "react";
import { getPriorities, getTasks } from "../services/task";
import PropTypes from 'prop-types'

export const StoreContext = createContext({});

export const StoreProvider = ({ children, user }) => {
  const [priorities, setPriorities] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);

	useEffect(() => {
		async function getData() {
			try {
				setLoading(true);
				setPriorities(await getPriorities());
        setTasks(await getTasks(user.uid));
			} catch (error) {
				console.log("Ocurrio un error!\n", error)
			} finally {
				setLoading(false);
			}
		}
		getData()
	}, [user, reload]);

  return (
    <StoreContext.Provider value={{ tasks, priorities, loading, setTasks, setReload }}>
      {children}
    </StoreContext.Provider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.node,
  user: PropTypes.any
}