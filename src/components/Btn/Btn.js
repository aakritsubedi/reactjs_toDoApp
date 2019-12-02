import React, {Component} from 'react';
import styles from './asset/css/Btn.module.css';

class Btn extends Component{
    render(){
        let additionalClass = (this.props.title === 'Delete') ? styles.btnDanger : styles.btnSuccess;
        let btn = (
            <button className={styles.btn+' '+additionalClass} onClick={this.props.onClick}>{this.props.title}</button>
        );
        return btn;
    }
}

export default Btn;