import { Link, Outlet, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = ({ user, logout }) => {
	const navigate = useNavigate();
	
	return (
		<>
			<header style={{ padding: 10, marginBottom: 30 }}>
				<nav>
					<ul style={{ display: "flex", justifyContent: "space-around" }}>
						<Link to={"/"}>
							<li>Inicio</li>
						</Link>
						<Link to={"/tasks"} style={{ visibility: "visible" }}>
							<li>Mis tareas</li>
						</Link>
						{!user ? (
							<>
								<Link to={"/login"}>
									<li>Login</li>
								</Link>
								<Link to={"/register"}>
									<li>Register</li>
								</Link>
							</>
						) : (
							<button onClick={() => {logout(); navigate("/")}}>Logout</button>
						)}
					</ul>
				</nav>
			</header>

			<Outlet />
		</>
	);
};

NavBar.propTypes = {
	user: PropTypes.object,
	logout: PropTypes.func,
};

export default NavBar;
