import { db } from "./firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc, where } from "firebase/firestore";

const taskCollection = collection(db, "tasks");

export const createTask = async (data) => { 
	try {
		const ref = await addDoc(taskCollection, data);
		return ref
	} catch (error) {
		console.log("Error al crear la tarea: ", error);
		throw error;
	}
 }

export const getTasks = async (uid) => {
	try {
		const q = query(taskCollection, where("user", "==", uid))
		const snapshot = await getDocs(q);
		const tasks = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
		return tasks;
	} catch (error) {
		console.log("Error al traer coleccion 'tasks': ", error);
		throw error;
	}
};

export const getPriorities = async () => {
	try {
		const q = query(collection(db, "priorities"), orderBy("value", "desc"))
		const snapshot = await getDocs(q);
		const priorities = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
		return priorities;
	} catch (error) {
		console.log("Error al traer coleccion 'priorities': ", error);
		throw error;
	}
};

export const updateTask = async (id, data) => {
	try {
		let ref = doc(taskCollection, id);
		await updateDoc(ref, data);
		return true;
	} catch (error) {
		console.log("Error al actualizar tarea: ", error);
		throw error;
	}
};

export const deleteTask = async (id) => {
	try {
		let ref = doc(taskCollection, id);
		await deleteDoc(ref);
		return true;
	} catch (error) {
		console.log("Error al eliminar tarea: ", error);
		throw error;
	}
};
