import{Bar,Line, Pie} from 'react-chartjs-2';
// import{Bar,Line, Pie} from 'chart.js';
import { Component } from 'react';
import TempRecordTable from './TempReadingTable';
import axios from 'axios';
import getTempData from './getTempData'

let TempData =[];
let TimeData =[];

class TempChart extends Component{
    constructor(props){
        // await getTempData();
        super(props);
       
        this.state ={ 
            chartData :{
                // labels:['jjkj','hjhjhj','guug','a','b','c'],
                labels:TimeData,
                datasets: [{
                    label: 'My First Dataset',
                    // data: [65, 59, 80, 81, 56, 55, 40],
                    data: TempData,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            }
        }
        console.log(TempData)
        
    }

    componentWillMount(){
        axios.get("http://localhost:8080/tempreadings/")
        .then(response => {
            console.log(response) 
            //  for (const dataObj of response.data.data){
            for (const dataObj of response.data){
                TempData.push(parseFloat(dataObj.data_value))
                TimeData.push(parseFloat(dataObj.date))
            }
        })
        .catch((error) =>{
            console.log(error);
        })
        console.log(TempData, TimeData)
    }

    static defaultProps ={
        displayTitle : true,
        displayLegend : true,
        legendPosition : 'right',
    }

    render(){


        return(
            <div className="chart">
                {/* getTempData(); */}
                <div className ="TempChart" style={{width:'550px', height:'350px'}}>
                <Line
                    data={this.state.chartData}
                    options = {{
                        title :{
                            display: this.props.displayTitle,
                            text:'Temperature Variation',
                            fontSize : 25,
                
                        },
                        legend :{
                            display: this.props.displayLegend,
                            position : this.props.legendPosition,
                        },
                        // maintainAspectRatio: false
                    }}
                />
                {/* const data = {
                    labels: labels,
                    datasets: [{
                        label: 'My First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                    }; */}
                </div>
            </div>
        )
    }
}

export default TempChart;