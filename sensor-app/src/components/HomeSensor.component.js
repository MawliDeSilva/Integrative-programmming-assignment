import React, {useState} from 'react'
import {Card, Jumbotron, Container, InputGroup, FormControl} from 'react-bootstrap'
import '../App.css';
// import Sidebar from './Sidebar';


function HomeSensor(){
    const [temp, updateTemp] = useState({ f: 0, c: 0 })

  const updateC = ev => updateTemp({
    c: ev.target.value,
    f: (+ev.target.value * 9 / 5 + 32).toFixed(2)
  })
  
  const updateF = ev => updateTemp({
    c: ((+ev.target.value - 32) * 5 / 9).toFixed(2),
    f: ev.target.value
  })
        return ( 
            // <div className="row" style={{maxWidth:'100%'}}>

            //     {/* ----------sidebar inserted---------------- */}
            //     <Sidebar/>
            //     {/* ---------------home page------------ */}
                <div className="homeDiv col-10 text-center" style={{height:'88vh', paddingLeft:'50px', paddingTop:'30px'}}>
                    <Jumbotron fluid style={{padding:'10px'}}>
                        <Container>
                            <h1>MONITOR - TEMPERATURE SENSOR</h1>
                        </Container>
                    </Jumbotron>
                    <Card className="tempCard" style={{ width: '20rem', marginLeft:'450px'}} bg="info">
                        <Card.Header style={{fontWeight:'bold'}}>TEMPERATURE</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <InputGroup style={{ marginBottom:'10px'}}>
                                    <FormControl placeholder="Temperature" value = {temp.c} onChange = {updateC}/>
                                    <InputGroup.Append>
                                        <InputGroup.Text>°C</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                                <InputGroup>
                                    <FormControl placeholder="Temperature" value = {temp.f} onChange = {updateF}/>
                                    <InputGroup.Append>
                                        <InputGroup.Text>°F</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div style={{marginTop:'30px'}}>
                        <img src='/image.png' alt=""style={{width:'550px', height:'350px'}}/>
                    </div>
                </div>
            // </div>
         );

}
 
export default HomeSensor;