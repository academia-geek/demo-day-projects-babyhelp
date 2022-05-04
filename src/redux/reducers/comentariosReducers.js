import { typesComentarios } from '../types/types'

const initialState = {
    comentarios: [
    ]
}

export const comentariosReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesComentarios.addComen:
            return {
                comentarios: [...state.comentarios]

            }
        case typesComentarios.deleteComen:
            return {
                comentarios: (state.comentarios).filter(activ => activ.active !== false)

            }
        case typesComentarios.editComen:

            return {
                ...state

            }
        case typesComentarios.listComen:
            return {
                comentarios: [...action.payload]
            }

        default: {
            return state
        }
    }
}