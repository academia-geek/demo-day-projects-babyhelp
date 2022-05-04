import {typesComentariosVacunas } from '../types/types'

const initialStateVacunas = {
    comentariosVacunas: [
    ]
}

export const comentariosVacunasReducers = (state = initialStateVacunas, action) => {
    switch (action.type) {
        case typesComentariosVacunas.addComen:
            return {
                comentariosVacunas: [...state.comentariosVacunas]

            }
        case typesComentariosVacunas.deleteComen:
            return {
                comentariosVacunas: (state.comentariosVacunas).filter(activ => activ.active !== false)

            }
        case typesComentariosVacunas.editarComen:

            return {
                ...state

            }
        case typesComentariosVacunas.listComen:
            return {
                comentariosVacunas: [...action.payload]
            }

        default: {
            return state
        }
    }
}