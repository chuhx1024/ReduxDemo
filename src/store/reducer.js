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
        case 'changeInput':
            newState.inputValue = action.value
            return newState
        break
        case 'addItem':
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        break
        case 'delItem':
            newState.list.splice(action.index, 1)
            return newState
        break
    }
    return state
}