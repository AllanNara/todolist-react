import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import withValidation from "../hoc/withValidation";
import useAuth from "../hooks/useAuth";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginFormWithValidation = withValidation(LoginForm);

const Login = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	const { login, signUpWithGoogle } = useAuth();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	useEffect(() => {
		return () => {
			setFormData({
				email: "",
				password: "",
			});
		};
	}, []);

	const onLogin = async () => {
		if (formData.email && formData.password) {
			try {
				await login(formData.email, formData.password);
			} catch (error) {
				console.log(error);
				navigate("/register", { state: { from: "/login" } });
			}
		}
	};

	const inputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const signGoogle = async() => {
		try {
			await signUpWithGoogle()
		} catch (error) {
			console.error("Error al autenticar con Google: ", error);
		}
	}

	return (
		<>
			<section style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
				{state && state.from && (
					<p style={{ color: "#f00", marginTop: "10px", paddingTop: "20px" }}>
						Para acceder a sus notas debe ingresar al sistema
					</p>
				)}
				<h1>Ingresar</h1>
				<LoginFormWithValidation {...{ onLogin, inputChange, formData }} />
			</section>
			<section>
				<button onClick={signGoogle}>
					<h4>Ingresar con google...</h4>
				</button>
			</section>
		</>
	);
};
export default Login;
