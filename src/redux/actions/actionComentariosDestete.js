import {
    addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where
} from "firebase/firestore";
import Swal from "sweetalert2";
import { baseDato } from "../../Firebase/firebaseConfig";
import {typesComentariosDestete } from "../types/types";

//-------------agregar---------------//
export const addcomentariosDesteteAsync = (comentarios) => {
    console.log(comentarios);
    return (dispatch) => {
        addDoc(collection(baseDato, "comentariosDesteteBD"), comentarios)
            .then(resp => {
                dispatch(addcomentariosDesteteSync(comentarios))
                dispatch(listcomentariosDesteteAsyn())
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

export const addcomentariosDesteteSync = (comentarios) => {
    return {
        type: typesComentariosDestete.addComen,
        payload: comentarios
    }
}


//---------------listar----------------//
export const listcomentariosDesteteAsyn = () => {
    return async (dispatch) => {
        const colleccionTraer = await getDocs(collection(baseDato, "comentariosDesteteBD"))
        const comentario = []
        colleccionTraer.forEach((doc) => {
            comentario.push({
                ...doc.data()
            })
        })
        dispatch(listcomentariosDesteteSync(comentario))
        console.log(comentario);
    }
}

export const listcomentariosDesteteSync = (comentario) => {
    console.log(comentario);
    return {
        type: typesComentariosDestete.listComen,
        payload: comentario
    }

}


//---------------------Editar-----------//
export const editcomentariosDesteteAsync = (ids, comentarios) => {
    return async (dispatch) => {
        const colleccionTraer = collection(baseDato, "comentariosDesteteBD")
        const q = query(colleccionTraer, where("id", "==", ids))
        const traerDatosQ = await getDocs(q) //traigame todo el objeto de firestore
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        const documenRef = doc(baseDato, "comentariosDesteteBD", id)

        await updateDoc(documenRef, comentarios)
            .then(resp => {
                dispatch(editcomentariosDesteteSync(comentarios))
                dispatch(listcomentariosDesteteAsyn())
                console.log(resp)
            })
            .catch((err) => console.log(err))
    }
}

export const editcomentariosDesteteSync = (comentarios) => {
    return {
        type: typesComentariosDestete.editarComen,
        payload: comentarios
    }

}



//-------------------delete--------------------//
export const deletecomentariosDesteteAsync = (id) => {
    return async (dispatch) => {
        const colleccionTrae = collection(baseDato, "comentariosDesteteBD")
        const q = query(colleccionTrae, where("id", "==", id))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((docum => {
            deleteDoc(doc(baseDato, "comentariosDesteteBD", docum.id))
        }))
        dispatch(deletecomentariosDesteteSync(id))
    }
}

export const deletecomentariosDesteteSync = (id) => {
    console.log(id);
    return {
        type: typesComentariosDestete.deleteComen,
        payload: id
    }

}