import {typesPosiciones } from '../types/types'

const initialStatePosiciones = {
    comentariosPosiciones: [
    ]
}



export const comentariosPosicionesReducers = (state = initialStatePosiciones, action) => {
    switch (action.type) {
        case typesPosiciones.addPosiciones:
            return {
                comentariosPosiciones: [...state.comentariosPosiciones]

            }
        case typesPosiciones.deletePosiciones:
            return {
                comentariosPosiciones: (state.comentariosPosiciones).filter(activ => activ.active !== false)

            }
        case typesPosiciones.editarPosiciones:

            return {
                ...state

            }
        case typesPosiciones.listPosiciones:
            return {
                comentariosPosiciones: [...action.payload]
            }

        default: {
            return state
        }
    }
}