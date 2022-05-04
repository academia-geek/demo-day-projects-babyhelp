import { typesComentariosEnfermedades, typesComentariosColicos } from '../types/types'

const initialState = {
    comentariosEnfermedades: [
    ]
}
export const comentariosEnfermedadesReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesComentariosEnfermedades.addComen:
            return {
                comentariosEnfermedades: [...state.comentariosEnfermedades]

            }
        case typesComentariosEnfermedades.deleteComen:
            return {
                comentariosEnfermedades: (state.comentariosEnfermedades).filter(activ => activ.active !== false)

            }
        case typesComentariosEnfermedades.editarComen:

            return {
                ...state

            }
        case typesComentariosEnfermedades.listComen:
            return {
                comentariosEnfermedades: [...action.payload]
            }

        default: {
            return state
        }
    }
}