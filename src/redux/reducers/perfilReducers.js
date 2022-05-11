import { typesPerfil } from "../types/types";

const initialState = {
    perfil: []
}

export const perfilReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesPerfil.addperfil:
            return {
                perfil: [action.payload]
            }
        case typesPerfil.listperfil:

            return {
                perfil: [...action.payload]
            }

        case typesPerfil.editarperfil:
            return {
                ...state
            }


        default:
            return state
    }
}