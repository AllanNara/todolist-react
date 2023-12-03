import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = ({ user, logout }) => {
	return (
		<>
			<header>
				<nav>
					<ul style={{ display: "flex", justifyContent: "space-around" }}>
						<Link to={"/"}>
							<li>Inicio</li>
						</Link>
						<Link to={"/tasks"} style={{visibility: "visible"}}>
							<li>Mis tareas</li>
						</Link>
						{!user ? (
							<Link to={"/login"}>
								<li>Login</li>
							</Link>
						) : (
							<button onClick={logout}>Logout</button>
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
