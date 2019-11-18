import React, { Component } from 'react'

import store from './store'
import {changeInputAction, addItemAction, delItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'

export default class TodoList extends Component {
    constructor (props) {
        super(props)
        this.state  = store.getState()
        console.log(this.state)
        store.subscribe(this.storeChange)
    }
    render() {
        return (
           <TodoListUI
                placeHolder={this.state.placeHolder}
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                delItem={this.delItem}
           />
        )
    }
    changeInputValue = (e) => {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    clickBtn = () => {
        const action = addItemAction()
        store.dispatch(action)
    }
    delItem = (index) => {
        console.log(index)
        const action = delItemAction(index)
        store.dispatch(action)

    }
    storeChange = () => {
        this.setState(store.getState())
    }
}
