import{Bar,Line, Pie} from 'react-chartjs-2';
// import{Bar,Line, Pie} from 'chart.js';
import { Component } from 'react';

class TempChart extends Component{
    constructor(props){
        super(props);
        this.state ={
            chartData :{
                labels:['jjkj','hjhjhj','guug','a','b','c'],
                datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            }
        }
    }
    render(){
        return(
            <div className="chart">
                <div className ="TempChart">
                <Line
                    data={this.state.chartData}
                    options = {{
                        maintainAspectRatio: false
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