import React from 'react'
import './App.css'
import Sidebar from './Sidebar';

function Tables () {
        return ( 
            <div className="row" style={{maxWidth:'100%'}}>

                {/* ----------sidebar inserted---------------- */}
                <Sidebar/>
                {/* ---------------home page------------ */}
                <div className="homeDiv col-10 text-center" style={{height:'88vh'}}></div>
         </div>
         );
}
 
export default Tables;