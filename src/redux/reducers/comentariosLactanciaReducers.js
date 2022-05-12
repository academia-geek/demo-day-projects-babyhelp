import {typesLactancia } from '../types/types'

const initialStateLactancia = {
    comentariosLactancia: [
    ]
}



export const comentariosLactanciaReducers = (state = initialStateLactancia, action) => {
    switch (action.type) {
        case typesLactancia.addLactancia:
            return {
                comentariosLactancia: [...state.comentariosLactancia]

            }
        case typesLactancia.deleteLactancia:
            return {
                comentariosLactancia: (state.comentariosLactancia).filter(activ => activ.active !== false)

            }
        case typesLactancia.editarLactancia:

            return {
                ...state

            }
        case typesLactancia.listLactancia:
            return {
                comentariosLactancia: [...action.payload]
            }

        default: {
            return state
        }
    }
}