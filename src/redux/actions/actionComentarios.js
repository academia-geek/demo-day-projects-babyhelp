import {
    addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where
} from "firebase/firestore";
import Swal from "sweetalert2";
import { baseDato } from "../../Firebase/firebaseConfig";
import { typesComentarios } from "../types/types";



//-------------agregar---------------//
export const addcomentariosAsync = (comentarios) => {
    console.log(comentarios);
    return (dispatch) => {
        addDoc(collection(baseDato, "comentariosBD"), comentarios)
            .then(resp => {
                dispatch(addcomentariosSync(comentarios))
                dispatch(listcomentariosAsyn())
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

export const addcomentariosSync = (comentarios) => {
    return {
        type: typesComentarios.addComen,
        payload: comentarios
    }
}


//---------------listar----------------//
export const listcomentariosAsyn = () => {
    return async (dispatch) => {
        const colleccionTraer = await getDocs(collection(baseDato, "comentariosBD"))
        const comentario = []
        colleccionTraer.forEach((doc) => {
            comentario.push({
                ...doc.data()
            })
        })
        dispatch(listcomentariosSync(comentario))
        console.log(comentario);
    }
}

export const listcomentariosSync = (comentario) => {
    console.log(comentario);
    return {
        type: typesComentarios.listComen,
        payload: comentario
    }

}


//---------------------Editar-----------//
export const editcomentariosAsync = (ids, comentarios) => {
    return async (dispatch) => {
        const colleccionTraer = collection(baseDato, "comentariosBD")
        const q = query(colleccionTraer, where("id", "==", ids))
        const traerDatosQ = await getDocs(q) //traigame todo el objeto de firestore
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        const documenRef = doc(baseDato, "comentariosBD", id)

        await updateDoc(documenRef, comentarios)
            .then(resp => {
                dispatch(editcomentariosSync(comentarios))
                dispatch(listcomentariosAsyn())
                console.log(resp)
            })
            .catch((err) => console.log(err))
    }
}

export const editcomentariosSync = (comentarios) => {
    return {
        type: typesComentarios.editarComen,
        payload: comentarios
    }

}



//-------------------delete--------------------//
export const deletecomentariosAsync = (id) => {
    return async (dispatch) => {
        const colleccionTrae = collection(baseDato, "comentariosBD")
        const q = query(colleccionTrae, where("id", "==", id))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((docum => {
            deleteDoc(doc(baseDato, "comentariosBD", docum.id))
        }))
        dispatch(deletecomentariosSync(id))
    }
}

export const deletecomentariosSync = (id) => {
    console.log(id);
    return {
        type: typesComentarios.deleteComen,
        payload: id
    }

}