import { useState } from "react"
import PropTypes from "prop-types"

const withValidation = (WrappedComponent) => {
  const WithValidation = (props) => {
    const [errors, setErrors] = useState({});

    const validateForm = () => {
      const newErrors = {};
      if(!props.formData.email) newErrors.email = "No se ingreso correo";
      if(!props.formData.password) newErrors.password = "Contraseña no ingresada";
      setErrors(newErrors);
    }

    return (
      <WrappedComponent
        {...props}
        {...{ errors, validateForm }}
      />
    )
  }

  WithValidation.propTypes = {
    formData: PropTypes.object
  }

  return WithValidation
}

export default withValidation