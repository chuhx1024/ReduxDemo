 // 无状态组件还是需要引入 React  因为 要使用 JSX
import React from 'react' 
import 'antd/dist/antd.css'
import {Input, Button,List} from 'antd'

const TodoListUI = (props) => {
    return (
        <div style={{margin: '10px'}}>
            <div>
                <Input 
                    placeholder={props.placeHolder}
                    style={{width: '400px', marginRight:'10px'}}
                    value={props.inputValue}
                    onChange={props.changeInputValue}
                />
                <Button
                    type='primary'
                    onClick={props.clickBtn}
                >
                    按钮
                </Button>
            </div>
            <div style={{marginTop:"10px", width:"500px"}}>
                <List
                    header={<div>我就是列表的头部</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item
                            onClick={()=>{props.delItem(index)}}
                        >
                            {item.title}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}
export default TodoListUI

