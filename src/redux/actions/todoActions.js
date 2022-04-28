import { types } from "../types/types"
import {
    addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where
} from "firebase/firestore";
import Swal from "sweetalert2";
import { baseDato } from "../../Firebase/firebaseConfig";



//-------------agregar---------------//
export const addTODOAsync = (tarea) => {
    console.log(tarea);
    return (dispatch) => {
        addDoc(collection(baseDato, "todoBD"), tarea)
            .then(resp => {
                dispatch(CrearTodoSincrono(tarea))

            })
            .catch(error => {
                console.warn(error);
            })

        dispatch(listTODOAsyn())


    }
}

export const CrearTodoSincrono = (tarea) => {
    return {
        type: types.crear,
        payload: tarea
    }
}



//---------------listar----------------//
export const listTODOAsyn = () => {
    return async (dispatch) => {
        const colleccionTraer = await getDocs(collection(baseDato, "todoBD"))
        const tarea = []
        colleccionTraer.forEach((doc) => {
            tarea.push({
                ...doc.data()
            })
        })
        dispatch(listSync(tarea))

        console.log(tarea);
    }
}

export const listSync = (tarea) => {
    return {
        type: types.list,
        payload: tarea
    }

}





//---------------------Editar-----------//
export const editTODOAsync = (ids, tarea) => {
    return async (dispatch) => {
        const colleccionTraer = collection(baseDato, "todoBD")
        const q = query(colleccionTraer, where("id", "==", ids))
        const traerDatosQ = await getDocs(q) //traigame todo el objeto de firestore
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        const documenRef = doc(baseDato, "todoBD", id)

        await updateDoc(documenRef, tarea)
            .then(resp => {
                dispatch(EditarTodoSincrono(tarea))
                dispatch(listTODOAsyn())
                console.log(resp)
            })
            .catch((err) => console.log(err))
    }
}

export const EditarTodoSincrono = (dato) => {
    console.log(dato);
    return {
        type: types.editar,
        payload: dato
    }
}





//-------------------delete--------------------//
export const deleteTODOAsync = (id) => {
    return async (dispatch) => {
        const colleccionTrae = collection(baseDato, "todoBD")
        const q = query(colleccionTrae, where("id", "==", id))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((docum => {
            deleteDoc(doc(baseDato, "todoBD", docum.id))
        }))
        dispatch(EliminarTodoSincrono(id))
        dispatch(listTODOAsyn())
    }
}

export const EliminarTodoSincrono = (todo) => {
    console.log(todo)
    return {
        type: types.eliminar,
        payload: todo
    }
}





