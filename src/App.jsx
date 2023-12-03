import { BrowserRouter } from "react-router-dom";
import AppRouter from "./containers/AppRouter";
import { FirestoreProvider } from "./context/firestoreContext";
import { AuthProvider } from "./context/authContext";

const App = () => {
	return (
		<div className="container">
			<BrowserRouter>
				<AuthProvider>
					<FirestoreProvider>
						<AppRouter />
					</FirestoreProvider>
				</AuthProvider>
			</BrowserRouter>
		</div>
	);
};

export default App;
