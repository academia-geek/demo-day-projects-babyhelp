import {
    addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where
} from "firebase/firestore";
import Swal from "sweetalert2";
import { baseDato } from "../../Firebase/firebaseConfig";
import { typesPerfil } from "../types/types";



//-------------agregar---------------//
export const addperfilAsync = (perfil) => {
    console.log(perfil);
    return (dispatch) => {
        addDoc(collection(baseDato, "perfilBD"), perfil)
            .then(resp => {
                dispatch(addperfilSync(perfil))
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Información de Perfil Agregada Correctamente!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.warn(error);
            })
    }
}

export const addperfilSync = (perfil) => {
    return {
        type: typesPerfil.addFrase,
        payload: perfil
    }
}


//---------------listar----------------//
export const listperfilAsyn = () => {
    return async (dispatch) => {
        const colleccionTraer = await getDocs(collection(baseDato, "perfilBD"))
        const perfil = []
        colleccionTraer.forEach((doc) => {
            perfil.push({ 
                ...doc.data()
            })
        }) 
        dispatch(listperfilSync(perfil))
    }
}

export const listperfilSync = (perfil) => {
    return {
        type: typesPerfil.listperfil,
        payload: perfil
    }

}


//---------------------Editar-----------//
export const editperfilAsync = (ids, perfil) => {
    return async (dispatch) => {
        const colleccionTraer = collection(baseDato, "perfilBD")
        const q = query(colleccionTraer, where("id", "==", ids))
        const traerDatosQ = await getDocs(q) //traigame todo el objeto de firestore
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        const documenRef = doc(baseDato, "perfilBD", id)

        await updateDoc(documenRef, perfil)
            .then(resp => {
                dispatch(editperfilSync(perfil))
                dispatch(listperfilAsyn())
                console.log(resp)
            })
            .catch((err) => console.log(err))
    }
}

export const editperfilSync = (perfil) => {
    return {
        type: typesPerfil.editarperfil,
        payload: perfil
    }

}



//-------------------delete--------------------//
export const deleteperfilAsync = (id) => {
    return async (dispatch) => {
        const colleccionTrae = collection(baseDato, "perfilBD")
        const q = query(colleccionTrae, where("id", "==", id))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((docum => {
            deleteDoc(doc(baseDato, "perfilBD", docum.id))
        }))
        dispatch(deleteperfilSync(id))
    }
}

export const deleteperfilSync = (id) => {
    console.log(id);
    return {
        type: typesPerfil.deleteperfil,
        payload: id
    }

}