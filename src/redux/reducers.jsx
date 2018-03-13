
import {combineReducers} from 'redux'

function aaa(state= 0 ,action) {
    return state
}

function bbb(state = [] , action) {
    return state
}

export default combineReducers({
    aaa,
    bbb
})

