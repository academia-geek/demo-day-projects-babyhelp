import { typesAcciones } from "../types/types";

const initialState = {
    aprende: []
}

export const aprendeReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesAcciones.addItem:
            return {
                aprende: [action.payload]
            }
        case typesAcciones.listItem:

            return {
                aprende: [...action.payload]
            }

        case typesAcciones.editarItem:
            return {
                ...state
            }

        case typesAcciones.deleteItem:
            return {
                ...state,
                aprende: state.aprende.filter(p => p.id !== action.payload)
            }

        default:
            return state
    }
}