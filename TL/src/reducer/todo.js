import { ADD_DE, ADD_ED, ADD_NEW } from "../constrains/constrains"

const initialsate = JSON.parse(localStorage.getItem("jobs")) || []
export const todo = (state = initialsate, action) => {
    const stateClone = state;
    switch (action.type) {
        case ADD_NEW:
            const newState = [action.payload, ...stateClone]
            localStorage.setItem("jobs", JSON.stringify(newState))
            return newState
        case ADD_DE:
            const deleteState = stateClone.filter(e => e.id != action.payload)
            localStorage.setItem("jobs", JSON.stringify(deleteState))
            return deleteState
        case ADD_ED:
            const editState = stateClone.map(e => (e.id == action.payload ? { ...e, status: !e.status } : e))
            localStorage.setItem("jobs", JSON.stringify(editState))
            return editState
        default:
            return stateClone
    }
}
