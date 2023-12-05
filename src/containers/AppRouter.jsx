import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import TaskListContainer from "./TaskListContainer";
import Login from "./Login";
import useAuth from "../hooks/useAuth";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import NavBar from "../components/NavBar";
import Register from "./Register";
import CreateTask from "./CreateTask";

const AppRouter = () => {
	const { user, logout, loading } = useAuth();

	if (loading) return <h1>Cargando...</h1>;

	return (
		<Routes>
			<Route element={<NavBar {...{ user, logout }} />}>
				<Route exact path="/" element={<Home />} />
				<Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
					<Route exact path="/tasks" element={<TaskListContainer />} />
					<Route exact path="/tasks/create" element={<CreateTask />} />
				</Route>
				<Route element={<PublicRoute user={user} />}>
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/register" element={<Register />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default AppRouter;
