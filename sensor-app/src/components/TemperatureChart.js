import React,{ useState,useEffect } from 'react';
import{Bar,Line, Pie} from 'react-chartjs-2';
import axios from 'axios';


const TemperatureChart =()=>{
    
    const[chartData, setChartData] = useState({});
    const[temperatureData, setTemperatureData] = useState([]);
    const[timeSeriesData, setTimeData] = useState([]);
    

    const Chart =()=>{
        let TempData =[];
        let TimeData =[];
        axios.get("http://localhost:8080/tempreadings/")
        .then(response => {
            console.log(response) 
            
            //  for (const dataObj of response.data.data){
            for (const dataObj of response.data){
                TempData.push(parseFloat(dataObj.data_value))
                TimeData.push(parseFloat(dataObj.date))
            }
            setChartData({
                // chartData :{
                    labels:TimeData,
                    datasets: [{
                        label: 'Temperature data',
                        data: TempData,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1,
                        display : true,
                    }]
            });
        })
        .catch((error) =>{
            console.log(error);
        })
        console.log(TempData, TimeData)

        
    }

    useEffect(() => {
        Chart();
    },[]);

     return(
        <div className="chart">
            <div className ="TemperatureChart" >
            <Line
                // data={this.state.chartData}
                data ={chartData}
                options = {{
                    title :{
                        display: true,
                        text:'Temperature Variation',
                        fontSize : 25,
            
                    },
                    legend :{
                        // display: this.props.displayLegend,
                        // position : this.props.legendPosition,
                        display: true,
                        position : true,
                    },
                    responsive: true,
                    // maintainAspectRatio: false
                }}
            />
            
            </div>
        </div>
    )
}

export default TemperatureChart;