import {
    addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where
} from "firebase/firestore";
import Swal from "sweetalert2";
import { baseDato } from "../../Firebase/firebaseConfig";
import {typesPosiciones } from "../types/types";

//-------------agregar---------------//
export const addcomentariosPosicionesAsync = (comentarios) => {
    console.log(comentarios);
    return (dispatch) => {
        addDoc(collection(baseDato, "comentariosPosicionesBD"), comentarios)
            .then(resp => {
                dispatch(addcomentariosPosicionesSync(comentarios))
                dispatch(listcomentariosPosicionesAsyn())
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'comentario Agregado Correctamente!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.warn(error);
            })
    }
}

export const addcomentariosPosicionesSync = (comentarios) => {
    return {
        type: typesPosiciones.addPosiciones,
        payload: comentarios
    }
}


//---------------listar----------------//
export const listcomentariosPosicionesAsyn = () => {
    return async (dispatch) => {
        const colleccionTraer = await getDocs(collection(baseDato, "comentariosPosicionesBD"))
        const comentario = []
        colleccionTraer.forEach((doc) => {
            comentario.push({
                ...doc.data()
            })
        })
        dispatch(listcomentariosPosicionesSync(comentario))
        console.log(comentario);
    }
}

export const listcomentariosPosicionesSync = (comentario) => {
    console.log(comentario);
    return {
        type: typesPosiciones.listPosiciones,
        payload: comentario
    }

}


//---------------------Editar-----------//
export const editcomentariosPosicionesAsync = (ids, comentarios) => {
    return async (dispatch) => {
        const colleccionTraer = collection(baseDato, "comentariosPosicionesBD")
        const q = query(colleccionTraer, where("id", "==", ids))
        const traerDatosQ = await getDocs(q) //traigame todo el objeto de firestore
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        const documenRef = doc(baseDato, "comentariosPosicionesBD", id)

        await updateDoc(documenRef, comentarios)
            .then(resp => {
                dispatch(editcomentariosPosicionesSync(comentarios))
                dispatch(listcomentariosPosicionesAsyn())
                console.log(resp)
            })
            .catch((err) => console.log(err))
    }
}

export const editcomentariosPosicionesSync = (comentarios) => {
    return {
        type: typesPosiciones.editarPosiciones,
        payload: comentarios
    }

}



//-------------------delete--------------------//
export const deletecomentariosPosicionesAsync = (id) => {
    return async (dispatch) => {
        const colleccionTrae = collection(baseDato, "comentariosPosicionesBD")
        const q = query(colleccionTrae, where("id", "==", id))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((docum => {
            deleteDoc(doc(baseDato, "comentariosPosicionesBD", docum.id))
        }))
        dispatch(deletecomentariosPosicionesSync(id))
    }
}

export const deletecomentariosPosicionesSync = (id) => {
    console.log(id);
    return {
        type: typesPosiciones.deletePosiciones,
        payload: id
    }

}