import { ADD_DE, ADD_ED, ADD_NEW } from "../constrains/constrains";

export const handelAddNew = (newJob) => ({
    type: ADD_NEW,
    payload: newJob
})
export const handelDeleteJob = (id) => ({
    type: ADD_DE,
    payload: id
})
export const handelEditJob = (id) => ({
    type: ADD_ED,
    payload: id
})
