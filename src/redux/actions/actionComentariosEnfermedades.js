import {
    addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where
} from "firebase/firestore";
import Swal from "sweetalert2";
import { baseDato } from "../../Firebase/firebaseConfig";
import { typesComentariosEnfermedades } from "../types/types";




//-------------agregar---------------//
export const addcomentariosEnfermedadesAsync = (comentarios) => {
    console.log(comentarios);
    return (dispatch) => {
        addDoc(collection(baseDato, "comentariosEnfermedadesBD"), comentarios)
            .then(resp => {
                dispatch(addcomentariosEnfermedadesSync(comentarios))
                dispatch(listcomentariosEnfermedadesAsyn())
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

export const addcomentariosEnfermedadesSync = (comentarios) => {
    return {
        type: typesComentariosEnfermedades.addComen,
        payload: comentarios
    }
}


//---------------listar----------------//
export const listcomentariosEnfermedadesAsyn = () => {
    return async (dispatch) => {
        const colleccionTraer = await getDocs(collection(baseDato, "comentariosEnfermedadesBD"))
        const comentario = []
        colleccionTraer.forEach((doc) => {
            comentario.push({
                ...doc.data()
            })
        })
        dispatch(listcomentariosEnfermedadesSync(comentario))
        console.log(comentario);
    }
}

export const listcomentariosEnfermedadesSync = (comentario) => {
    console.log(comentario);
    return {
        type: typesComentariosEnfermedades.listComen,
        payload: comentario
    }

}


//---------------------Editar-----------//
export const editcomentariosEnfermedadesAsync = (ids, comentarios) => {
    return async (dispatch) => {
        const colleccionTraer = collection(baseDato, "comentariosEnfermedadesBD")
        const q = query(colleccionTraer, where("id", "==", ids))
        const traerDatosQ = await getDocs(q) //traigame todo el objeto de firestore
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        const documenRef = doc(baseDato, "comentariosEnfermedadesBD", id)

        await updateDoc(documenRef, comentarios)
            .then(resp => {
                dispatch(editcomentariosEnfermedadesSync(comentarios))
                dispatch(listcomentariosEnfermedadesAsyn())
                console.log(resp)
            })
            .catch((err) => console.log(err))
    }
}

export const editcomentariosEnfermedadesSync = (comentarios) => {
    return {
        type: typesComentariosEnfermedades.editarComen,
        payload: comentarios
    }

}



//-------------------delete--------------------//
export const deletecomentariosEnfermedadesAsync = (id) => {
    return async (dispatch) => {
        const colleccionTrae = collection(baseDato, "comentariosEnfermedadesBD")
        const q = query(colleccionTrae, where("id", "==", id))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((docum => {
            deleteDoc(doc(baseDato, "comentariosEnfermedadesBD", docum.id))
        }))
        dispatch(deletecomentariosEnfermedadesSync(id))
    }
}

export const deletecomentariosEnfermedadesSync = (id) => {
    console.log(id);
    return {
        type: typesComentariosEnfermedades.deleteComen,
        payload: id
    }

}
