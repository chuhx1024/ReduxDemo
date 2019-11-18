import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {Input, Button,List} from 'antd'
import store from './store'

export default class TodoList extends Component {
    constructor (props) {
        super(props)
        this.state  = store.getState()
        console.log(this.state)
    }
    render() {
        return (
            <div style={{margin: '10px'}}>
                <div>
                    <Input 
                        placeholder={this.state.placeHolder}
                        style={{width: '400px', marginRight:'10px'}}
                    />
                    <Button
                        type='primary'
                    >
                        按钮
                    </Button>
                </div>
                <div style={{marginTop:"10px", width:"500px"}}>
                    <List
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={this.state.list}
                        renderItem={item => (
                            <List.Item>
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }
}
