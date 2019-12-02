import React, {Component} from 'react';

import Btn from '../components/Btn/Btn';
import Input from '../components/Input/Input';

import axios from 'axios';

class Login extends Component{
    constructor(){
        super();
        this.state={
            loggedIn: false,
            username: '',
            userId: '',
            userInfo: ''
        }
    }
    setUsername(e){
        let username = e.target.value;
        this.setState({
            username: username
        });
    }
    setPassword(e){
        let password = e.target.value;
        this.setState({
            password: password
        });
    }
    login(){
        
        let url= 'http://127.0.0.1:8080/api/login';
        let data= {
            username: this.state.username,
            password: this.state.password
        }
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            }
        };
        axios.post(url,data,axiosConfig)
        .then((res)=>{
            this.setState({
                userInfo: res.data[0],
                loggedIn: true,
                username: '',
                password:''
            })
        })
        .catch((err)=>{
            console.log("AXIOS ERROR: ", err);
        });
    }
    logout(){
        this.setState({
            userInfo: '',
            loggedIn: false,
            username: '',
            password:''
        })
    }
    render(){
        let loginContainer = (
            <div className='header clearfix'>
                <span className='logo'>To Do App</span>
                <span className='login-container'>
                    <Input type='text' title='Username' placeholder='Please enter username' isInline='true' onBlur={(e)=>this.setUsername(e)}/>
                    <Input type='password' title='Password' placeholder='Please enter passsword' isInline='true' onBlur={(e)=>this.setPassword(e)} />
                    <Btn title='Login' onClick={()=>this.login()}/>
                </span>
            </div>
        );
        let welcomeUser = (
            <div className='header clearfix'>
                <span className='logo'>To Do App</span>
                <div className='login-container'>
                    {console.log(this.state.userInfo)}
                    <span className='welcomeUser'>Welcome {this.state.userInfo.username}</span>
                    <Btn title='Logout' onClick={()=>this.logout()}/>
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