import {
    addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where
} from "firebase/firestore";
import Swal from "sweetalert2";
import { baseDato } from "../../Firebase/firebaseConfig";
import {typesLactancia} from "../types/types";

//-------------agregar---------------//
export const addcomentariosLactanciaAsync = (comentarios) => {
    console.log(comentarios);
    return (dispatch) => {
        addDoc(collection(baseDato, "comentariosLactanciaBD"), comentarios)
            .then(resp => {
                dispatch(addcomentariosLactanciaSync(comentarios))
                dispatch(listcomentariosLactanciaAsyn())
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

export const addcomentariosLactanciaSync = (comentarios) => {
    return {
        type: typesLactancia.addLactancia,
        payload: comentarios
    }
}


//---------------listar----------------//
export const listcomentariosLactanciaAsyn = () => {
    return async (dispatch) => {
        const colleccionTraer = await getDocs(collection(baseDato, "comentariosLactanciaBD"))
        const comentario = []
        colleccionTraer.forEach((doc) => {
            comentario.push({
                ...doc.data()
            })
        })
        dispatch(listcomentariosLactanciaSync(comentario))
        console.log(comentario);
    }
}

export const listcomentariosLactanciaSync = (comentario) => {
    console.log(comentario);
    return {
        type: typesLactancia.listLactancia,
        payload: comentario
    }

}


//---------------------Editar-----------//
export const editcomentariosLactanciaAsync = (ids, comentarios) => {
    return async (dispatch) => {
        const colleccionTraer = collection(baseDato, "comentariosLactanciaBD")
        const q = query(colleccionTraer, where("id", "==", ids))
        const traerDatosQ = await getDocs(q) //traigame todo el objeto de firestore
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        const documenRef = doc(baseDato, "comentariosLactanciaBD", id)

        await updateDoc(documenRef, comentarios)
            .then(resp => {
                dispatch(editcomentariosLactanciaSync(comentarios))
                dispatch(listcomentariosLactanciaAsyn())
                console.log(resp)
            })
            .catch((err) => console.log(err))
    }
}

export const editcomentariosLactanciaSync = (comentarios) => {
    return {
        type: typesLactancia.editarLactancia,
        payload: comentarios
    }

}



//-------------------delete--------------------//
export const deletecomentariosLactanciaAsync = (id) => {
    return async (dispatch) => {
        const colleccionTrae = collection(baseDato, "comentariosLactanciaBD")
        const q = query(colleccionTrae, where("id", "==", id))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((docum => {
            deleteDoc(doc(baseDato, "comentariosLactanciaBD", docum.id))
        }))
        dispatch(deletecomentariosLactanciaSync(id))
    }
}

export const deletecomentariosLactanciaSync = (id) => {
    console.log(id);
    return {
        type: typesLactancia.deleteLactancia,
        payload: id
    }

}