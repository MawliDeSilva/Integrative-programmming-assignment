import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

import Table from 'react-bootstrap/Table';

import Sidebar from './Sidebar';

// state = {
//     title :'',

// }
const TempRecord = props => (
// const User = props => (sensor_id,
        // date,
        
    <tr>        
        <td>{props.TempRecord.sensor_id}</td>
        <td>{props.TempRecord. date}</td>
        <td>{props.TempRecord.data_value}</td>
    </tr>
)

// export default class UserList extends Component{
class TempRecordTable extends React.Component{   
    constructor(props){
        super(props);
        this.deleteTempRecord = this.deleteTempRecord.bind(this)
        // this.deleteUser = this.deleteUser.bind(this);
        
        this.state = { 
            // users: []
            TempRecords :[]
        };
    }

    componentDidMount(){
            axios.get('http://localhost:5000//tempSensors/')
            .then(response => {
                this.setState({
                    // users: response.data
                    TempRecords :response.data
                })   
            })
            .catch((error) =>{
                console.log(error);
            })
    }

    // deleteUser(id) {
    deleteTempRecord(id){
        axios.delete('http://localhost:5000//tempSensors/delete/'+id)
            .then(res => console.log(res.data));

        this.setState({
            // users: this.state.users.filter(el => el._id !==id)
            TempRecords: this.state.users.filter(el => el._id !==id)
        })
    }
    
    TempRecordsList() {
        // return this.state.users.map( currentuser => {
        return this.state.TempRecords.map( currentTempRecord => {
            // return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>
            return <TempRecord TempRecords ={currentTempRecord} deleteTempRecord={this.deleteTempRecord} key={currentTempRecord.sensor_id}/>
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
                        {this.TempRecordslist()}
                    </tbody>
                </Table>
            </div>
            </div>
        );
    }
}
 
export default TempReadingTable;