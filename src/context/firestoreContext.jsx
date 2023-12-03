import { createContext } from "react";
import PropTypes from 'prop-types'
import db from "../utils/firebase";
import { collection } from "firebase/firestore";

export const FirestoreContext = createContext(null);

export const FirestoreProvider = ({ children }) => {
  const taskCollection = collection(db, "tasks")

  return (
    <FirestoreContext.Provider value={{ db, taskCollection }}>
      {children}
    </FirestoreContext.Provider>
  )
}

FirestoreProvider.propTypes = {
  children: PropTypes.node.isRequired
}