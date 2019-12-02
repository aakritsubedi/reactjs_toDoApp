import React, {Component} from 'react';

import Btn from '../components/Btn/Btn';
import Input from '../components/Input/Input';

class Login extends Component{
    constructor(){
        super();
        this.state={
            loggedIn: false,
            username: null,
            userId: null
        }
    }
    render(){
        let loginContainer = (
            <div className='header clearfix'>
                <span className='logo'>To Do App</span>
                <span className='login-container'>
                    <Input type='text' title='Username' placeholder='Please enter username' isInline='true'/>
                    <Input type='text' title='Password' placeholder='Please enter passsword' isInline='true'/>
                    <Btn title='Login'/>
                </span>
            </div>
        );
        let welcomeUser = (
            <div className='header clearfix'>
                <span className='logo'>To Do App</span>
                <div className='login-container'>
                    <span className='welcomeUser'>Welcome {this.state.username}</span>
                    <Btn title='Logout'/>
                </div>
            </div>
        );
        if(this.state.loggedIn){
            return welcomeUser;
        }
        else{
            return loginContainer;
        }
    }
}

export default Login;