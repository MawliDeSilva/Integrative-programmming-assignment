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
                    <Card className="tempCard" style={{ width: '20rem', marginLeft:'350px'}} bg="info">
                    <Card.Header style={{fontWeight:'bold'}}>Temperature</Card.Header>
                    <Card.Body>
                        <Card.Title>Current Reading:</Card.Title>
                        <Card.Text>
                                <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Temperature in Celcius"
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text>°C</InputGroup.Text>
                                </InputGroup.Append>
                                </InputGroup>
                        </Card.Text>
                        <Button variant="primary" style={{marginBottom:'10px'}}>Convert</Button>
                        <Card.Text>
                                <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Temperature in Farenhite"
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text>°F</InputGroup.Text>
                                </InputGroup.Append>
                                </InputGroup>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
         </div>
         );

}
 
export default HomeSensor;