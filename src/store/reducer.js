import {CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST} from './actionTypes'
// import abc from './actionTypes'
// let {CHANGE_INPUT, ADD_ITEM, DEL_ITEM} = abc
const defaultState = {
    placeHolder: 'Write something',
    inputValue: '我是默认值',
    list: []
}
export default (state = defaultState, action) => {
    let {type} = action
    let newState = JSON.parse(JSON.stringify(state))
    switch (type) {
        case CHANGE_INPUT:
            newState.inputValue = action.value
            return newState
        break
        case ADD_ITEM:
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        break
        case DEL_ITEM:
            newState.list.splice(action.index, 1)
            return newState
        break
        case GET_LIST:
            newState.list = action.data
            return newState
        break
    }
    return state
}