import {
    addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where
} from "firebase/firestore";
import Swal from "sweetalert2";
import { baseDato } from "../../Firebase/firebaseConfig";
import {typesComentariosVacunas } from "../types/types";

//-------------agregar---------------//
export const addcomentariosVacunasAsync = (comentarios) => {
    console.log(comentarios);
    return (dispatch) => {
        addDoc(collection(baseDato, "comentariosVacunasBD"), comentarios)
            .then(resp => {
                dispatch(addcomentariosVacunasSync(comentarios))
                dispatch(listcomentariosVacunasAsyn())
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

export const addcomentariosVacunasSync = (comentarios) => {
    return {
        type: typesComentariosVacunas.addComen,
        payload: comentarios
    }
}


//---------------listar----------------//
export const listcomentariosVacunasAsyn = () => {
    return async (dispatch) => {
        const colleccionTraer = await getDocs(collection(baseDato, "comentariosVacunasBD"))
        const comentario = []
        colleccionTraer.forEach((doc) => {
            comentario.push({
                ...doc.data()
            })
        })
        dispatch(listcomentariosVacunasSync(comentario))
        console.log(comentario);
    }
}

export const listcomentariosVacunasSync = (comentario) => {
    console.log(comentario);
    return {
        type: typesComentariosVacunas.listComen,
        payload: comentario
    }

}


//---------------------Editar-----------//
export const editcomentariosVacunasAsync = (ids, comentarios) => {
    return async (dispatch) => {
        const colleccionTraer = collection(baseDato, "comentariosVacunasBD")
        const q = query(colleccionTraer, where("id", "==", ids))
        const traerDatosQ = await getDocs(q) //traigame todo el objeto de firestore
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        const documenRef = doc(baseDato, "comentariosVacunasBD", id)

        await updateDoc(documenRef, comentarios)
            .then(resp => {
                dispatch(editcomentariosVacunasSync(comentarios))
                dispatch(listcomentariosVacunasAsyn())
                console.log(resp)
            })
            .catch((err) => console.log(err))
    }
}

export const editcomentariosVacunasSync = (comentarios) => {
    return {
        type: typesComentariosVacunas.editarComen,
        payload: comentarios
    }

}



//-------------------delete--------------------//
export const deletecomentariosVacunasAsync = (id) => {
    return async (dispatch) => {
        const colleccionTrae = collection(baseDato, "comentariosVacunasBD")
        const q = query(colleccionTrae, where("id", "==", id))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((docum => {
            deleteDoc(doc(baseDato, "comentariosVacunasBD", docum.id))
        }))
        dispatch(deletecomentariosVacunasSync(id))
    }
}

export const deletecomentariosVacunasSync = (id) => {
    console.log(id);
    return {
        type: typesComentariosVacunas.deleteComen,
        payload: id
    }

}