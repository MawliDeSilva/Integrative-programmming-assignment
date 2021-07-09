import React, { Component } from "react";
import axios from "axios";
// import './App.css';

export default class AddUser extends Component{
    constructor(props){
        super(props);

        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeType=this.onChangeType.bind(this);
        this.onChangeContactInfo=this.onChangeContactInfo.bind(this);

        this.onSubmit=this.onSubmit.bind(this);

        this.state = {
            name: '',
            type: '',
            contactInfo: '',
        }
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }
    onChangeType(e){
        this.setState({
            type: e.target.value
        });
    }
    onChangeContactInfo(e){
        this.setState({
            contactInfo: e.target.value
        });
    }
    
    onSubmit(e){
        e.preventDefault();

        const user = {
            name:  this.state.name,
            type:  this.state.type,
            contactInfo:  this.state.contactInfo,
        }

        console.log(user);

        axios.post('http://localhost:8080/users/add', user)
            .then(res => console.log(res.data));
        
        alert("User added");            
    }

    render() {
        return(
              <div className="container">
                <h1>Add User</h1>
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

                <label><b>Contact Info:</b></label>
                <input type="text" name="Info" placeholder="Contact Info" className="form-control" value={this.state.contactInfo} onChange={this.onChangeContactInfo} required/>
                <br/><br/>

                <div className="clearfix">
                <button type="cancel" className="btn btn-primary">Cancel</button>
                <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Add User</button>    
                </div>
            </form>
            </div>               
        );
    }
}
