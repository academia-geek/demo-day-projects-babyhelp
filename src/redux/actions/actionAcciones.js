import {
    addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where
} from "firebase/firestore";
import Swal from "sweetalert2";
import { baseDato } from "../../Firebase/firebaseConfig";
import { typesAcciones } from "../types/types";



//-------------agregar---------------//
export const addAprendeAsync = (Item) => {
    console.log(Item);
    return (dispatch) => {
        addDoc(collection(baseDato, "aprendeBD"), Item)
            .then(resp => {
                dispatch(addAprendeSync(Item))
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Item Agregado Correctamente!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.warn(error);
            })
    }
}

export const addAprendeSync = (Item) => {
    return {
        type: typesAcciones.addFrase,
        payload: Item
    }
}


//---------------listar----------------//
export const listAprendeAsyn = () => {
    return async (dispatch) => {
        const colleccionTraer = await getDocs(collection(baseDato, "aprendeBD"))
        const Item = []
        colleccionTraer.forEach((doc) => {
            Item.push({
                ...doc.data()
            })
        })
        dispatch(listAprendeSync(Item))
    }
}

export const listAprendeSync = (Item) => {
    return {
        type: typesAcciones.listItem,
        payload: Item
    }

}


//---------------------Editar-----------//
export const editAprendeAsync = (ids, Item) => {
    return async (dispatch) => {
        const colleccionTraer = collection(baseDato, "aprendeBD")
        const q = query(colleccionTraer, where("id", "==", ids))
        const traerDatosQ = await getDocs(q) //traigame todo el objeto de firestore
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        const documenRef = doc(baseDato, "aprendeBD", id)

        await updateDoc(documenRef, Item)
            .then(resp => {
                dispatch(editAprendeSync(Item))
                dispatch(listAprendeAsyn())
                console.log(resp)
            })
            .catch((err) => console.log(err))
    }
}

export const editAprendeSync = (Item) => {
    return {
        type: typesAcciones.editarItem,
        payload: Item
    }

}



//-------------------delete--------------------//
export const deleteAprendeAsync = (id) => {
    return async (dispatch) => {
        const colleccionTrae = collection(baseDato, "aprendeBD")
        const q = query(colleccionTrae, where("id", "==", id))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((docum => {
            deleteDoc(doc(baseDato, "aprendeBD", docum.id))
        }))
        dispatch(deleteAprendeSync(id))
    }
}

export const deleteAprendeSync = (id) => {
    console.log(id);
    return {
        type: typesAcciones.deleteItem,
        payload: id
    }

}