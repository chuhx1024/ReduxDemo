import React, { Component } from 'react'

import store from './store'
import {changeInputAction, addItemAction, delItemAction, getListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

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
    componentDidMount () {
        axios.get('https://www.easy-mock.com/mock/5b5189cd98002960110f8695/my-ele/article/getList')
        .then((res) => {
            console.log(res)
            const {data} = res.data
            const action = getListAction(data)
            store.dispatch(action)
        })
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
