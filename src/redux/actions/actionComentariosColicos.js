import {
    addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where
} from "firebase/firestore";
import Swal from "sweetalert2";
import { baseDato } from "../../Firebase/firebaseConfig";
import {typesComentariosColicos } from "../types/types";

//-------------agregar---------------//
export const addcomentariosColicosAsync = (comentarios) => {
    console.log(comentarios);
    return (dispatch) => {
        addDoc(collection(baseDato, "comentariosColicosBD"), comentarios)
            .then(resp => {
                dispatch(addcomentariosColicosSync(comentarios))
                dispatch(listcomentariosColicosAsyn())
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

export const addcomentariosColicosSync = (comentarios) => {
    return {
        type: typesComentariosColicos.addComen,
        payload: comentarios
    }
}


//---------------listar----------------//
export const listcomentariosColicosAsyn = () => {
    return async (dispatch) => {
        const colleccionTraer = await getDocs(collection(baseDato, "comentariosColicosBD"))
        const comentario = []
        colleccionTraer.forEach((doc) => {
            comentario.push({
                ...doc.data()
            })
        })
        dispatch(listcomentariosColicosSync(comentario))
        console.log(comentario);
    }
}

export const listcomentariosColicosSync = (comentario) => {
    console.log(comentario);
    return {
        type: typesComentariosColicos.listComen,
        payload: comentario
    }

}


//---------------------Editar-----------//
export const editcomentariosColicosAsync = (ids, comentarios) => {
    return async (dispatch) => {
        const colleccionTraer = collection(baseDato, "comentariosColicosBD")
        const q = query(colleccionTraer, where("id", "==", ids))
        const traerDatosQ = await getDocs(q) //traigame todo el objeto de firestore
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        const documenRef = doc(baseDato, "comentariosColicosBD", id)

        await updateDoc(documenRef, comentarios)
            .then(resp => {
                dispatch(editcomentariosColicosSync(comentarios))
                dispatch(listcomentariosColicosAsyn())
                console.log(resp)
            })
            .catch((err) => console.log(err))
    }
}

export const editcomentariosColicosSync = (comentarios) => {
    return {
        type: typesComentariosColicos.editarComen,
        payload: comentarios
    }

}



//-------------------delete--------------------//
export const deletecomentariosColicosAsync = (id) => {
    return async (dispatch) => {
        const colleccionTrae = collection(baseDato, "comentariosColicosBD")
        const q = query(colleccionTrae, where("id", "==", id))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((docum => {
            deleteDoc(doc(baseDato, "comentariosColicosBD", docum.id))
        }))
        dispatch(deletecomentariosColicosSync(id))
    }
}

export const deletecomentariosColicosSync = (id) => {
    console.log(id);
    return {
        type: typesComentariosColicos.deleteComen,
        payload: id
    }

}