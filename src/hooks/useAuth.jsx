import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const useAuth = () => {
  const context = useContext(AuthContext);
  if(!context) {
    throw new Error('useAuth debe ser utilizado dentro de un CartProvider');
  }

  return context
}

export default useAuth