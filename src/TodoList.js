import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {Input, Button,List} from 'antd'
import store from './store'
import {changeInputAction, addItemAction, delItemAction} from './store/actionCreators'

export default class TodoList extends Component {
    constructor (props) {
        super(props)
        this.state  = store.getState()
        console.log(this.state)
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <div style={{margin: '10px'}}>
                <div>
                    <Input 
                        placeholder={this.state.placeHolder}
                        style={{width: '400px', marginRight:'10px'}}
                        value={this.state.inputValue}
                        onChange={this.changeInputValue}
                    />
                    <Button
                        type='primary'
                        onClick={this.clickBtn}
                    >
                        按钮
                    </Button>
                    {this.state.inputValue}
                </div>
                <div style={{marginTop:"10px", width:"500px"}}>
                    <List
                        header={<div>我就是列表的头部</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (
                            <List.Item
                                onClick={()=>{this.delItem(index)}}
                            >
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
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
