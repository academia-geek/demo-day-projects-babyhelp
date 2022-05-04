import { types } from '../types/types'

const initialState = {
    todo: [
        
    ]
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.crear:
            return {
                todo: [...state.todo]

            }
        case types.eliminar:
            return {
                todo: (state.todo).filter(activ => activ.active !== false)

            }
        case types.editar:

            return {
                ...state

            }
        case types.list:
            return {
                todo: [...action.payload]
            }

        default: {
            return state
        }
    }
}