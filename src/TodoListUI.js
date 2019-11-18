import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {Input, Button,List} from 'antd'

export default class TodoListUI extends Component {
    render() {
        return (
            <div style={{margin: '10px'}}>
                <div>
                    <Input 
                        placeholder={this.props.placeHolder}
                        style={{width: '400px', marginRight:'10px'}}
                        value={this.props.inputValue}
                        onChange={this.props.changeInputValue}
                    />
                    <Button
                        type='primary'
                        onClick={this.props.clickBtn}
                    >
                        按钮
                    </Button>
                </div>
                <div style={{marginTop:"10px", width:"500px"}}>
                    <List
                        header={<div>我就是列表的头部</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (
                            <List.Item
                                onClick={()=>{this.props.delItem(index)}}
                            >
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }
}
