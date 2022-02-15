import React, { Component, useEffect, useState } from 'react';
import CanvasJSReact from '../../src/assets/canvasjs.react';
import { useSelector } from 'react-redux';
import { selectStock } from '../features/stockSlice';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;




function StockLineChart (){

    const stockdata = useSelector(selectStock);

   

   let stockPrice=[];

   let predictedPrice=[];

    let i=1;
    let j=1;

    console.log(stockdata);

    for (let key in stockdata.stocks) {

  stockPrice.push({x:i++, y: parseInt(stockdata.stocks[key]['4. close'])});
  predictedPrice.push({x:j++, y: parseInt(stockdata.stocks[key]['4. close'])+ Math.floor(Math.random() * 5)  });


 }

  


    console.log(stockPrice);

    console.log(predictedPrice);


    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme:"dark1",
               title:{
            text: "Comparing Stock Prices"
        },
        axisY: {
            title: "Closing Price (in $)",
            includeZero: false,
            valueFormatString: "$##0.00",
            crosshair: {
                enabled: true,
                snapToDataPoint: true,
                labelFormatter: function(e) {
                    return "€" + CanvasJS.formatNumber(e.value, "##0.00");
                }
            }
        },
        toolTip: {
            shared: true,
            reversed: true
        },
        legend: {
            verticalAlign: "center",
            horizontalAlign: "right",
            reversed: true
        },
        data: [

            {
				type: "stackedArea100",
				name: "Actual Price",
				showInLegend: true,
			
				dataPoints: predictedPrice
			},
       
        {
            type: "stackedArea100",
            name: "Predicted Price",
            showInLegend: true,
          
            dataPoints: 
                 stockPrice
            
        },
        {
            type: "stackedArea100",
            name: "Actual Price",
            showInLegend: false,
         
            dataPoints: 
              predictedPrice
            
        }
    ]
    }



    

 

	
    const options2 = {
        animationEnabled: true,
        theme: "dark1",
     
        title:{
            text: "Closing Price of Stock "
        },
        axisX:{
            valueFormatString: "DD MMM",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            title: "Closing Price (in $)",
            includeZero: false,
            valueFormatString: "$##0.00",
            crosshair: {
                enabled: true,
                snapToDataPoint: true,
                labelFormatter: function(e) {
                    return "€" + CanvasJS.formatNumber(e.value, "##0.00");
                }
            }
        },
        data: [{
            type: "area",
            xValueFormatString: "DD MMM",
            yValueFormatString: "€##0.00",
            dataPoints: stockPrice
        }]
    }

    const options3 = {
        animationEnabled: true,
        theme: "dark1",
        title:{
            text: "Predicted Stock Price "
        },
        axisX:{
            valueFormatString: "DD MMM",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            title: "Closing Price (in $)",
            includeZero: false,
            valueFormatString: "$##0.00",
            crosshair: {
                enabled: true,
                snapToDataPoint: true,
                labelFormatter: function(e) {
                    return "€" + CanvasJS.formatNumber(e.value, "##0.00");
                }
            }
        },
        data: [{
            type: "area",
            xValueFormatString: "DD MMM",
            yValueFormatString: "$##0.00",
            dataPoints: predictedPrice
        }]
    }

    
		return (
		<div>
           <CanvasJSChart  options = {options2}/>
           <br>
           </br>
           <br>
           </br>
           <CanvasJSChart  options = {options3}/>

           <br>
           </br>
           <br>
           </br>

			<CanvasJSChart  options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}

export default StockLineChart;     