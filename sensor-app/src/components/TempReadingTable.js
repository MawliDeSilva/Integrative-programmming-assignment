import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

import Table from 'react-bootstrap/Table';

// import Sidebar from '../components/Sidebar.component';

const TempRecord = props => (
    <tr>        
        <td>{props.TempRecord.sensor_id}</td>
        <td>{props.TempRecord.date}</td>
        <td>{props.TempRecord.data_value}</td>
    </tr>
)

class TempRecordTable extends Component{   
    constructor(props){
        super(props);

        this.deleteTempRecord = this.deleteTempRecord.bind(this)
             
        this.state = { 
            TempRecords :[]
        };
    }

    componentDidMount(){
        axios.get('http://localhost:8080/tempreadings/')
        .then(response => {
            this.setState({
                TempRecords :response.data
            })   
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    // deleteUser(id) {
    deleteTempRecord(id){
        axios.delete('http://localhost:8080//tempreadings/delete/'+id)
            .then(res => console.log(res.data));

        this.setState({
            TempRecords: this.state.users.filter(el => el._id !==id)
        })
    }
    
    TempRecordsList() {
        return this.state.TempRecords.map( currentTempRecord => {
            return <TempRecord TempRecord={currentTempRecord} deleteTempRecord={this.deleteTempRecord} key={currentTempRecord._id}/>
        })
    }

    render() {
        return(
            // <div className="row" style={{maxWidth:'100%'}}>

            //     {/* ----------sidebar inserted---------------- */}
            //     <Sidebar/>
            //     {/* ---------------home page------------ */}
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
                        {this.TempRecordsList()}
                    </tbody>
                </Table>
            </div>
            // {/* </div> */}
        );
    }
}
 
export default TempRecordTable;