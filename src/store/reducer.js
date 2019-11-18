import {CHANGE_INPUT, ADD_ITEM, DEL_ITEM} from './actionTypes'
// import abc from './actionTypes'
// let {CHANGE_INPUT, ADD_ITEM, DEL_ITEM} = abc
const defaultState = {
    placeHolder: 'Write something',
    inputValue: '我是默认值',
    list: [
        '早会',
        '阿达',
        '那斯蒂芬'
    ]
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
    }
    return state
}