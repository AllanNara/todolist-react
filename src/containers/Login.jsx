import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import withValidation from "../hoc/withValidation";
import useAuth from "../hooks/useAuth";
import { useLocation } from "react-router-dom";

const LoginFormWithValidation = withValidation(LoginForm);

const Login = () => {
	const { state } = useLocation();
	const { login } = useAuth();
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
		}
	}, [])

	const onLogin = () => {
		if(formData.email && formData.password) {
			login(formData);
		}
	};

	const inputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
			{ state && state.from && (<p style={{color: "#f00", marginTop: "10px", paddingTop: "20px"}}>Para acceder a sus notas debe ingresar al sistema</p>) }
			<h1>Ingresar</h1>
			<LoginFormWithValidation onLogin={onLogin} inputChange={inputChange} formData={formData} />
		</section>
	);
};
export default Login;
