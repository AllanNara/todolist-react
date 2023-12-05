import { BrowserRouter } from "react-router-dom";
import AppRouter from "./containers/AppRouter";
import { AuthProvider } from "./context/authContext";

const App = () => {
	return (
		<div className="container">
			<BrowserRouter>
				<AuthProvider>
					<AppRouter />
				</AuthProvider>
			</BrowserRouter>
		</div>
	);
};

export default App;
