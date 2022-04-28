export const obtenerLocalStorage  = () =>{
    const todoStorage  = localStorage.getItem('tareasTodo')
    if(todoStorage === null){
        return undefined
    }
    return JSON.parse(todoStorage)
}

export const guardarLocalStorage  = (state) =>{
    const todoState = JSON.stringify(state)
    localStorage.setItem('tareasTodo', todoState)
    
}