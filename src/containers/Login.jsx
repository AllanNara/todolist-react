import { useState } from "react";
import LoginForm from "../components/LoginForm";
import withValidation from "../hoc/withValidation";

const LoginFormWithValidation = withValidation(LoginForm);

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const onLogin = () => {
		if(formData.email && formData.password) {
			console.log({ formData });
			setFormData({
				email: "",
				password: "",
			});
		}
	};

	const inputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section>
			<h1>Ingresar</h1>
			<LoginFormWithValidation onLogin={onLogin} inputChange={inputChange} formData={formData} />
		</section>
	);
};
export default Login;
