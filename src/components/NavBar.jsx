import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link to={"/"}>
            <li>Inicio</li>
          </Link>
          <Link to={"/tasks"}>
            <li>Mis tareas</li>
          </Link>
          <Link to={"/login"}>
            <li>Login</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
export default NavBar