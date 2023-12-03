import { useContext } from "react"
import { FirestoreContext } from "../context/firestoreContext"

const useStore = () => {
  const store = useContext(FirestoreContext);
  if(!store) {
    throw new Error("useStore debe ser utilizado dentro de un FirestoreProvider")
  }

  return store
}

export default useStore