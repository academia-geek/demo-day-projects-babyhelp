import {typesComentariosColicos } from '../types/types'

const initialStateColicos = {
    comentariosColicos: [
    ]
}



export const comentariosColicosReducers = (state = initialStateColicos, action) => {
    switch (action.type) {
        case typesComentariosColicos.addComen:
            return {
                comentariosColicos: [...state.comentariosColicos]

            }
        case typesComentariosColicos.deleteComen:
            return {
                comentariosColicos: (state.comentariosColicos).filter(activ => activ.active !== false)

            }
        case typesComentariosColicos.editarComen:

            return {
                ...state

            }
        case typesComentariosColicos.listComen:
            return {
                comentariosColicos: [...action.payload]
            }

        default: {
            return state
        }
    }
}