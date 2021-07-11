import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

import Table from 'react-bootstrap/Table';

const Alert = props => (
    <tr>        
        <td>{props.alert.alert_id}</td>
        <td>{props.alert.sensor_id}</td>
        <td>{props.alert.data_value}</td>
        <td>{props.alert.date}</td>
        <td>{props.alert.message}</td>
    </tr>
)

export default class AlertList extends Component{
    
    constructor(props){
        super(props);
        
        this.state = { 
            alerts: []
        };
    }

    componentDidMount(){
            axios.get('http://localhost:8080/alerts/')
            .then(response => {
                this.setState({
                    alerts: response.data
                })   
            })
            .catch((error) =>{
                console.log(error);
            })
    }
    
    alertList() {
        return this.state.alerts.map( currentalert => {
            return <Alert alert={currentalert} key={currentalert._id}/>
        })
    }

    render() {
        return(
            <div className="homeDiv col-10 text-center" style={{height:'88vh'}}>
                <h3>Alerts</h3><br/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Alert ID</th>
                            <th>Sensor ID</th>
                            <th>Sensor Reading</th>
                            <th>Date</th>
                            <th>Alert Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.alertList()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

