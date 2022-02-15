
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { selectStock } from '../features/stockSlice';
import StockLineChart from './StockLineChart';

const { Title } = Typography;

const LineChart = () => {

  const stockdata = useSelector(selectStock);
  

  const stockPrice = [];
  const stockTimestamp = [];

  console.log(stockdata.stockdata);

  let i=1;

  for (let key in stockdata.stockdata) {
    
       

        stockPrice.push({x:i++,y: parseInt(stockdata.stockdata[key]['5. volume'])});
        
    }

    console.log(stockPrice);

 

 
  

 
 

  return (
    <>

    <StockLineChart  stockPrice={stockPrice} />
      
    </>
  );


};

export default LineChart;
