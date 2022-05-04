import { typesVacunas } from "../types/types";

const url = 'https://demodaybabyhelp.herokuapp.com/vacunas';

//---------------listar----------------//
export const listVacunasAsyn = () => {
    return async (dispatch) => {
        const resp = await fetch(url)
        const dato = await resp.json()

        dispatch(listVacunasSync(dato)) 
        // console.log(dato.ingredients);
    }
}
 
export const listVacunasSync = (vacuna) => {
    console.log(vacuna);
    return {
        type: typesVacunas.list,
        payload: vacuna
    }

}