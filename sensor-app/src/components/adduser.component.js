import React, { Component } from "react";
import axios from "axios";
// import '../App.css';

export default class AddUser extends Component{
    constructor(props){
        super(props);

        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeType=this.onChangeType.bind(this);
        this.onChangeContactInfo=this.onChangeContactInfo.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);

        this.onSubmit=this.onSubmit.bind(this);

        this.state = {
            name: '',
            type: '',
            contactInfo: '',
            contactInfoLabel:'Enter your Email Address',
            password:'',
            errorMsg:''
        }
    }

   
    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }
    onChangeType(e){
        const value = e.target.value
        var label;
        if(value=="Email"){
            label = "Enter your email address"
        }else{
            label="Enter your phone number "
        }
        this.setState({
            type: e.target.value,
            contactInfoLabel:label
        });
    }
    onChangeContactInfo(e){
        this.setState({
            contactInfo: e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }
    
    onSubmit(e){
        e.preventDefault();
        const user = {
            name:  this.state.name,
            type:  this.state.type,
            contact_info:  this.state.contactInfo,
            password:  this.state.password,
        }
        if(user.name=='' | user.contact_info==''){
            this.state.errorMsg="Please fill the input fields";
            alert("Fill all the required fields")
        }else{
            console.log(user);

        axios.post('http://localhost:8080/users/add', user)
            .then(res => console.log(res.data));
        
        alert("User added");       
        }        
    }

    render() {
        return(
            <div className="container">
              <div className="homeDiv col-10" style={{height:'88vh'}}>
              <br/><br/>
                <h1>Add User</h1>
                <br/><br/>
                <form>        

                <label for="name"><b>Name:</b></label>
                <input type="text" placeholder="Name" name="name" className="form-control" value={this.state.name} onChange={this.onChangeName} required/>
                <br/><br/>

                <label for="PreComChan"> <b> Prefered Communication Channel: </b></label>    
                <select id="PreComChan" className="form-select" value={this.state.type} onChange={this.onChangeType}>
                    <option name="typeEmail" value="Email">Email</option>
                    <option name="typeSMS" value="SMS">SMS</option>
                    <option name="typeCall" value="Call">Call</option>         
                </select>
                <br/><br/>
                <label ><b>{this.state.contactInfoLabel}</b></label>
                <input type="text" name="Info" placeholder={this.state.contactInfoLabel} className="form-control" value={this.state.contactInfo} onChange={this.onChangeContactInfo} required/>
                <br/><br/>
                <label ><b>Password here :</b></label>
                <input type="password" name="Info" placeholder="Password" className="form-control" value={this.state.password} onChange={this.onChangePassword} required/>
                <br/><br/>
                <div className="clearfix">
                <button type="submit" className="btn btn-primary" onClick={this.onSubmit}style={{marginRight:'25px'}}>Add User</button>
                <button type="cancel" className="btn btn-primary">Cancel</button>                    
                </div>
            </form>
            </div></div>             
        );
    }
}
