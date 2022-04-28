import { types } from '../types/types'

const initialState = {
    todo: [
        // {
        //     id: 1,
        //     tarea: 'Hacer curso de Banco de Leche',
        //     active: false
        // },
        // {
        //     id: 2,
        //     tarea: 'Colocar vacuna del 1 mes al bebé',
        //     active: true
        // },
        // {
        //     id: 3,
        //     tarea: 'LLevar al Pediatra al bebé',
        //     active: true
        // }
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