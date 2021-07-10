import React from 'react'
import '../App.css'
import Table from 'react-bootstrap/Table'
// import Sidebar from './Sidebar';

function Tables () {
        return ( 
            // <div className="row" style={{maxWidth:'100%'}}>

            //     {/* ----------sidebar inserted---------------- */}
            //     <Sidebar/>
            //     {/* ---------------home page------------ */}
                <div className="homeDiv col-10 text-center" style={{height:'88vh'}}>
                        <div className="row">
                            <h1 style={{fontFamily:'serif', padding:'10px'}}>ALERT DETAILS</h1>
                        </div>
                        <div className="row" style={{margin:'10px'}}>
                            <Table  bordered hover responsive>
                                <thead style={{backgroundColor:'#03bafc', borderTop:'2px solid black'}}> 
                                    <tr>
                                        <th>ID</th>
                                        <th>Date</th>
                                        <th>Message</th>
                                        <th>Receiver</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2021-01-21</td>
                                        <td>Hiiii</td>
                                        <td>Kamal</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>2021-01-21</td>
                                        <td>Hiiii</td>
                                        <td>Kamal</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>2021-01-21</td>
                                        <td>Hiiii</td>
                                        <td>Kamal</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div> 
                    </div>
        //  </div>
         );
}
 
export default Tables;