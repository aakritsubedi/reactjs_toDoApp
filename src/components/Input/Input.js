import React, {Component} from 'react';
import styles from './asset/Input.module.css';

class Input extends Component{
    
    render(){
        let input = (
            <div className={this.props.isInline ? styles.formInline : styles.formBlock}>
                {
                    this.props.title  ? <label>{this.props.title}:</label>  : ''
                }
                <input type={this.props.type} placeholder={this.props.placeholder} className={(this.props.usedFor === 'search') ? styles.searchInput : styles.simple} onChange={this.props.onChange} id={this.props.id} />
            </div>
        );
        return input;
    }
}

export default Input;