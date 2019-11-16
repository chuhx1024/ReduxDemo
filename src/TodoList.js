import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {Input, Button} from 'antd'

export default class TodoList extends Component {
    render() {
        return (
            <div style={{margin: '10px'}}>
                <div>
                    <Input 
                        placeholder="write"
                        style={{width: '250px'}}
                    />
                    <Button
                        type='primary'
                    >
                        按钮
                    </Button>

                </div>
            </div>
        )
    }
}
