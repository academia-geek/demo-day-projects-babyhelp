import { typesEnfermedades } from "../types/types";

const url = 'https://demodaybabyhelp.herokuapp.com/infecciones';

//---------------listar----------------//
export const listEnfermedadesAsyn = () => {
    return async (dispatch) => {
        const resp = await fetch(url)
        const dato = await resp.json()

        dispatch(listEnfermedadesSync(dato))
        // console.log(dato.ingredients);
    }
}

export const listEnfermedadesSync = (Item) => {
    return {
        type: typesEnfermedades.list,
        payload: Item
    }

}