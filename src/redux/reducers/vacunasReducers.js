import { typesVacunas } from "../types/types";

const initialState = {
    vacuna: []
}

export const vacunasReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesVacunas.list:
            console.log(action);
            console.log(state);
            return {
                vacuna: action.payload
            }

        default:
            return state
    }
}