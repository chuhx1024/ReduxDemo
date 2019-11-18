import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {Input, Button,List} from 'antd'

const data = [
    '早会',
    '阿达',
    '那斯蒂芬'
]

export default class TodoList extends Component {
    render() {
        return (
            <div style={{margin: '10px'}}>
                <div>
                    <Input 
                        placeholder="write"
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
                        dataSource={data}
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
