import { useEffect, useState } from "react";
import withValidation from "../hoc/withValidation";
import useAuth from "../hooks/useAuth";
import { useLocation } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

const RegisterFormWithValidation = withValidation(RegisterForm);

const Register = () => {
	const { state } = useLocation();
	const { register } = useAuth();
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

	const onRegister = async () => {
		if (formData.email && formData.password) {
			await register(formData.email, formData.password);
		}
	};

	const inputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
			{state && state.from && (
				<p style={{ color: "#f00", marginTop: "10px", paddingTop: "20px" }}>
					Usuario no encontrado
				</p>
			)}
			<h1>Registrarse!</h1>
			<RegisterFormWithValidation {...{inputChange, onRegister, formData}} />
		</section>
	);
};
export default Register;
