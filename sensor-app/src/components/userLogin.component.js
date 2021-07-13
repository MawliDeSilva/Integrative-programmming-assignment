import React, { Component } from "react";
import axios from "axios";

import Button from 'react-bootstrap/Button';

export default class UserLoginPage extends Component{
    constructor(props){
        super(props);

        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onLogin=this.onLogin.bind(this);

        this.state = {
            username: '',
            password: '' 
        }
    }
    
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }

    onLogin(e){
        e.preventDefault();
        //if logged in redirect to page(as of now simply redirects)
        window.location="./";


        //check whether logged in 
        const user = {
            username:  this.state.username,
            password:  this.state.password
        }

        axios.post('http://localhost:8080/users/', user)
            .then(res => {
                if(res.data.name===this.state.username && res.data.password===this.state.password){
                    alert("Successfully logged in!");
                    //if logged in redirect to page
                    window.location="./";
                }
                                    
                else if(res.data.message==="Invalid credentials")
                    alert(res.data.message);

                console.log(res.data);

                
            });        
    }

    render() {
        return (
            <div className="homeDiv col-10" style={{height:'88vh', paddingLeft:'50px', paddingTop:'30px'}}>            
                <div className="login" > 
                    <h3>User Login</h3><br/>
                    <div className="loginform">                                  
                        <label className="form-label">Username or Email Address: </label>
                        <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUsername}/>
                        <br/>
                        <label className="form-label">Password: </label>
                        <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword}/>
                        <br/>                   
                    </div>
                    <Button variant="primary" onClick={this.onLogin} style={{marginRight:'25px'}}>Login</Button>
                </div>
            </div>
        );
    }
}
