import { typesEnfermedades } from "../types/types";

const initialState = {
    enfermedades: []
}

export const enfermedadesReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesEnfermedades.list:

            return {
                enfermedades: [...action.payload]
            }

        default:
            return state
    }
}