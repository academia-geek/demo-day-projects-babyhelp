import {typesComentariosDestete } from '../types/types'

const initialStateDestete = {
    comentariosDestete: [
    ]
}


export const comentariosDesteteReducers = (state = initialStateDestete, action) => {
    switch (action.type) {
        case typesComentariosDestete.addComen:
            return {
                comentariosDestete: [...state.comentariosDestete]

            }
        case typesComentariosDestete.deleteComen:
            return {
                comentariosDestete: (state.comentariosDestete).filter(activ => activ.active !== false)

            }
        case typesComentariosDestete.editarComen:

            return {
                ...state

            }
        case typesComentariosDestete.listComen:
            return {
                comentariosDestete: [...action.payload]
            }

        default: {
            return state
        }
    }
}