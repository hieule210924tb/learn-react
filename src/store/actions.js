import { SET_TODO_INPUT, ADD_TODO, DELETE_TODU, UPDATE_TODU } from "./constants";
export const setToDuInput = payload =>({
    type :SET_TODO_INPUT,
    payload
})
export const addToDu = payload =>({
    type :ADD_TODO,
    payload
})
export const deleteToDu = payload =>({
    type :DELETE_TODU,
    payload
})
export const updateToDu = ( index, payload) =>({
    type :UPDATE_TODU,
    index,
    payload 
})
