import React, {Component} from 'react';
import Input from './../Input/Input';
import Btn from './../Btn/Btn';

class  AddToDo extends Component{
    
    render(){
        let add = (
            <div className='add-todo-container'>
                <span>Add ToDo</span>
                <Input type='text' placeholder='Please enter title' isInline={true} value={this.props.title} onChange={this.props.addTitle}/>
                <Input type='text' placeholder='Please enter desc for to do' isInline={true} value={this.props.content} onChange={this.props.addContent}/>
                <Btn onClick={this.props.onClick} title='Add' />
            </div>
        );
        return add;
    }
}

export default AddToDo;