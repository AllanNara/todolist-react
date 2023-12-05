import { useContext } from "react";
import { StoreContext } from "../context/storeContext";

const useStore = () => {
	const store = useContext(StoreContext);
	if (!Object.keys(store).length) {
		throw new Error("'useStore' debe ser utilizado dentro de un 'StoreProvider'");
	}

	return store;
};

export default useStore;
