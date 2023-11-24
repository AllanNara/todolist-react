import PropTypes from "prop-types";

const LoginForm = ({ formData, onLogin, inputChange, errors, validateForm }) => {

	const handleSubmit = (e) => {
		e.preventDefault();
		validateForm && validateForm();
		onLogin();
	};

	return (
		<form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: "15px", alignItems: "flex-start"}}>
			<div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", width: 400, gap: 3}}>
				<label style={{width: "100%"}} htmlFor="email">Correo electronico:</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={inputChange}
				/>
				{errors && errors.email && (<span style={{color: "red", flexGrow: 1, alignSelf: "center", textAlign: "center"}}>*{errors.email}</span>)}
			</div>
			<div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", width: 400, gap: 3}}>
				<label style={{width: "100%"}} htmlFor="password">Contraseña</label>
				<input
					type="password"
					id="password"
					name="password"
					value={formData.password}
					onChange={inputChange}
				/>
				{errors && errors.password && (<span style={{color: "red", flexGrow: 1, alignSelf: "center", textAlign: "center"}}>*{errors.password}</span>)}
			</div>
			<input type="submit" value="Ingresar" style={{padding: "0 50px 0 50px", marginLeft: 10, textAlign: "center"}}/>
		</form>
	);
};

LoginForm.propTypes = {
	formData: PropTypes.object.isRequired,
	onLogin: PropTypes.func.isRequired,
	inputChange: PropTypes.func.isRequired,
	errors: PropTypes.object,
	validateForm: PropTypes.func,
};

export default LoginForm;
