import { BrowserRouter, Route, Routes } from "react-router-dom"
import TaskListContainer from './containers/TaskListContainer';
import Login from "./containers/Login";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tasks" element={<TaskListContainer />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
