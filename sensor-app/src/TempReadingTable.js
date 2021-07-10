import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

import Table from 'react-bootstrap/Table';

import Sidebar from './Sidebar';

// state = {
//     title :'',

// }
const TempReading = props => (
// const User = props => (sensor_id,
        // date,
        
    <tr>        
        <td>{props.TempReading.sensor_id}</td>
        <td>{props.TempReading. date}</td>
        <td>{props.TempReading.data_valuetype}</td>
    </tr>
)

// export default class UserList extends Component{
class TempReadingTable extends React.Component{   
    constructor(props){
        super(props);

        this.deleteUser = this.deleteUser.bind(this);
        
        this.state = { 
            // users: []
            TempReadings :[]
        };
    }

    componentDidMount(){
            axios.get('http://localhost:8080/users/')
            .then(response => {
                this.setState({
                    // users: response.data
                    TempReadings :response.data
                })   
            })
            .catch((error) =>{
                console.log(error);
            })
    }

    // deleteUser(id) {
    deleteTempReading(id){
        axios.delete('http://localhost:8080/users/delete/'+id)
            .then(res => console.log(res.data));

        this.setState({
            // users: this.state.users.filter(el => el._id !==id)
            TempReadings: this.state.users.filter(el => el._id !==id)
        })
    }
    
    TempReadingsList() {
        // return this.state.users.map( currentuser => {
        return this.state.TempReadings.map( currentTempReading => {
            // return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>
            return TempReading TempReadings ={currentTempReading} deleteTempReading={this.deleteTempReading} key={currentTempReading._id}/>
        })
    }

    render() {
        return(
            <div className="row" style={{maxWidth:'100%'}}>

                {/* ----------sidebar inserted---------------- */}
                <Sidebar/>
                {/* ---------------home page------------ */}
            <div className="homeDiv col-10 text-center" style={{height:'88vh'}}>
                <h3>Temperature</h3><br/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Sensor ID</th>
                        <th>Date</th>
                        <th>Temperature</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.TempReadingslist()}
                    </tbody>
                </Table>
            </div>
            </div>
        );
    }
}
 
export default TempReadingTable;