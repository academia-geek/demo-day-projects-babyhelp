import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { accionesReducers } from "../reducers/accionesReducers";
import { loginReducers } from "../reducers/loginReducers";
import { registerReducers } from "../reducers/registerReducers";
import { todoReducer } from "../reducers/reducerTodo";
import { aprendeReducers } from "../reducers/aprendeReducers";
import { vacunasReducers } from "../reducers/vacunasReducers";
import { comentariosReducers } from "../reducers/comentariosReducers";
import { enfermedadesReducers } from "../reducers/enfermedadesReducers";
import { comentariosEnfermedadesReducers } from "../reducers/comentariosEnfermedadesReducers";
import { comentariosColicosReducers } from "../reducers/comentariosColicosReducers";
import { comentariosVacunasReducers } from "../reducers/comentariosVacunasReducers";
import { comentariosDesteteReducers } from "../reducers/comentariosDesteteReducers";
import { perfilReducers } from "../reducers/perfilReducers";
import { comentariosLactanciaReducers } from "../reducers/comentariosLactanciaReducers";
import { comentariosPosicionesReducers } from "../reducers/comentariosPosicionesReducers";




const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducers,
    register: registerReducers,
    acciones: accionesReducers,
    todo: todoReducer,
    aprende: aprendeReducers,
    vacuna: vacunasReducers,
    comentarios: comentariosReducers,
    enfermedades: enfermedadesReducers,
    comentariosEnfermedades: comentariosEnfermedadesReducers,
    comentariosColicos: comentariosColicosReducers,
    comentariosVacunas: comentariosVacunasReducers,
    comentariosDestete: comentariosDesteteReducers,
    perfil: perfilReducers,
    comentariosLactancia: comentariosLactanciaReducers,
    comentariosPosiciones: comentariosPosicionesReducers,
});


export const store = createStore(
    reducers,
    // storageState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)


