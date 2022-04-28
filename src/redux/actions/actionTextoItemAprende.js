import { collection,  getDocs} from "firebase/firestore";
import { baseDato } from "../../Firebase/firebaseConfig";
import { typesAprende } from "../types/types";

//---------------listar----------------//
export const listAprendeAsyn = () => {
    return async (dispatch) => {
        const colleccionTraer = await getDocs(collection(baseDato, "textoItemAprendeDB"))
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
        type: typesAprende.listarAprende,
        payload: Item
    }

}
