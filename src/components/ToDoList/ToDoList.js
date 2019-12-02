import React, {Component} from 'react';
import styles from './asset/css/ToDoList.module.css';
import Btn from './../Btn/Btn';
import Moment from 'react-moment';
import 'moment-timezone';

class  ToDoList extends Component{
    render(){
        let list = (
            <li className={(this.props.status === 'complete') ? (styles.todoItems+' '+styles.strikeThru): styles.todoItems } id={this.props.id}>
                <Moment format="D MMM YYYY" withTitle className={styles.pullRight}>
                    {this.props.created_at}
                </Moment>
                <input type='checkbox'  className={styles.checkbox} onChange={this.props.onChange}/>

                <span className={styles.title} contentEditable={this.props.editStatus} >{this.props.title}</span>
                
                <p className={styles.desc} contentEditable={this.props.editStatus}>{this.props.desc}</p>
                <Btn className={styles.btn+' '+styles.btnWarning} onClick={this.props.editStatus ? this.props.saveEdit : this.props.edit} title={this.props.editStatus ? 'Save': 'Edit'}/> 
                <Btn className={styles.btn+' '+styles.btnWarning} onClick={this.props.delete} title='Delete'/>
                
            </li>
        );
        return list;
    }
}

export default ToDoList;