import React from 'react'
import { combineReducers } from 'redux'
import { todo } from './todo'

export const reducer = combineReducers({ todo })