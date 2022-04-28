import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { accionesReducers } from "../reducers/accionesReducers";
import { loginReducers } from "../reducers/loginReducers";
import { registerReducers } from "../reducers/registerReducers";
import { todoReducer } from "../reducers/reducerTodo";
import { aprendeReducers } from "../reducers/aprendeReducers";



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducers,
    register: registerReducers,
    acciones: accionesReducers,
    todo: todoReducer,
    aprende:  aprendeReducers
})



export const store = createStore(
    reducers,
    // storageState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)


