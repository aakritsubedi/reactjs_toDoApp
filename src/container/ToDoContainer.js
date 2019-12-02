import React, {Component} from 'react';

import Search from '../components/Search/Search';
import ToDoList from '../components/ToDoList/ToDoList';
import TODO_LIST_ITEMS from '../constants/constant';
//import Btn from '../components/Btn/Btn';
import AddToDo from '../components/AddToDo/AddToDo';

class ToDo extends Component{
    constructor(){
        super();
        this.task=[];
        this.state={
            allToDo: this.task,
            title: '',
            content: ''
        }
    }
    componentDidMount(){
        this.getTask('all');
    }
    searchToDo(){
        let keyword = document.getElementById('search-key').value;
        this.getTask(keyword);
    }
    deleteToDo(items){
        let indexOfItems=null;
        this.task.indexOf(items);
        this.task.splice(indexOfItems,1);
        this.setState({
            task: this.task
        })
    }
    editToDo(items){
        let indexOfItems=this.task.indexOf(items);
        this.task[indexOfItems].edit=true;
        this.setState({
            allToDo: this.task
        })
    }
    saveEdit(items){
        let indexOfItem=this.task.indexOf(items);
        this.task[indexOfItem].title=this.state.title;
        this.task[indexOfItem].desc=this.state.content;
        this.task[indexOfItem].edit=false;
        this.setState({
            task: this.task,
        })
    }
    addTitle(e){
        this.setState({
            title: e.target.value
        })
    }
    addContent(e){
        this.setState({
            content: e.target.value
        })
    }
    addToDo(){
        let items ={id: this.task.length+1,
        title: this.state.title,
        desc: this.state.content,
        created_at:Date.now(),
        edited_at:Date.now(),
        status:'incomplete',
        deleted:false}
        this.task.push(items);
        this.setState({
            task: this.task,
        })
    }
    getTask(keyword){
        if(keyword === 'all'){
            TODO_LIST_ITEMS.forEach(items=>{
                if(items.deleted === false){
                    this.task.push(
                        items
                    );
                }
            }); 
        }
        else{
                this.task = [];
                TODO_LIST_ITEMS.forEach(items=>{
                    let title= items.title.toLowerCase();
                    if(title.includes(keyword.toLowerCase()) && items.deleted === false){
                        this.task.push(
                           items
                        );
                    } 
                })
        }
        this.setState({
            allToDo : this.task
        })
    }
    checked(items){
        let indexOfItem = this.task.indexOf(items);
        let currentStatus = this.task[indexOfItem].status;
        if(currentStatus === 'complete'){
            this.task[indexOfItem].status = 'incomplete'
        }
        else{
            this.task[indexOfItem].status = 'complete';
        }
        this.setState({
            allToDo : this.task
        })
    }
    editTitle(e){
        this.setState({
            title: e.target.innerText
        });
    }
    editContent(e){
        this.setState({
            content: e.target.innerText
        });
    }
    render(){
        let todo = this.task.map(items=>{
            return <ToDoList title={items.title} key={items.id} id={items.id} desc={items.desc} status={items.status} onChange={()=>this.checked(items)} created_at={items.created_at} delete={()=>this.deleteToDo(items)} edit={()=>this.editToDo(items)} editStatus={items.edit} saveEdit={()=>this.saveEdit(items)} editTitle={(e)=>this.editTitle(e)} editContent={(e)=>this.editContent(e)}/>
        })
        let toDo = (
            <div className='toDoContainer'>
                <AddToDo title={this.state.title} content={this.state.content} onClick={()=>this.addToDo()} 
                addTitle={(e)=>this.addTitle(e)} addContent={(e)=>this.addContent(e)}/>
                <Search onChange={()=>this.searchToDo()}/>
                <ul className='toDoList'>
                    {todo}
                </ul>
            </div>
        );
        return toDo; 
    }
}

export default ToDo;