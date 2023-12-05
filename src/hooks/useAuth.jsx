import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const useAuth = () => {
  const auth = useContext(AuthContext);
  if(!Object.keys(auth).length) {
    throw new Error('useAuth debe ser utilizado dentro de un CartProvider');
  }

  return auth
}

export default useAuth