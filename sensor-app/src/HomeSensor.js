import React from 'react'
import {Card, Button, Jumbotron, Container, InputGroup, FormControl} from 'react-bootstrap'
import './App.css'
import Sidebar from './Sidebar';


function HomeSensor(){
        return ( 
            <div className="row" style={{maxWidth:'100%'}}>

                {/* ----------sidebar inserted---------------- */}
                <Sidebar/>
                {/* ---------------home page------------ */}
                <div className="homeDiv col-10 text-center" style={{height:'88vh', paddingLeft:'50px', paddingTop:'30px'}}>
                    <Jumbotron fluid style={{padding:'10px'}}>
                        <Container>
                            <h1>MONITOR - TEMPERATURE SENSOR</h1>
                        </Container>
                    </Jumbotron>
                    <Card className="tempCard" style={{ width: '20rem', marginLeft:'450px'}} bg="info">
                        <Card.Header style={{fontWeight:'bold'}}>TEMPERATURE</Card.Header>
                        <Card.Body>
                            <Card.Title>Current Reading:</Card.Title>
                            <Card.Text>
                                <InputGroup>
                                    <FormControl placeholder="Temperature"/>
                                    <Button variant="secondary">°C</Button>
                                    <Button variant="secondary">°F</Button>
                                </InputGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div style={{marginTop:'30px'}}>
                        <img src='/image.png' alt=""style={{width:'600px', height:'400px'}}/>
                    </div>
                </div>
         </div>
         );

}
 
export default HomeSensor;