import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import './PredictionPage.css';
import { useDispatch, useSelector } from 'react-redux'
import { pushStock, selectStock } from '../features/stockSlice';
import {  selectTicker,pushTicker } from '../features/tickerSlice';
import LineChart from './LineChart';
import StockLineChart from './StockLineChart';
import UseDebounce from './Debounce';

import { Spin } from "antd";



function PredictionPage() {

    const [data, setData] = useState([]);
    const currticker  = useSelector(selectTicker);
    const [ticker, setTicker] = useState("MSFT");
    const [spin, setspin] = useState(false);
   

   
    console.log(currticker);

    

    const dispatch = useDispatch();

    let stockPrice=[];

  

    const handleClick =(e)=>{

      e.preventDefault();

      setspin(true);

      setTimeout(()=>{

        setspin(false);
      },5000);

      dispatch(pushTicker(
        ticker
      ))
    };

   

   

    useEffect(()=>{

     var options = {
         method: 'GET',
         url: 'https://alpha-vantage.p.rapidapi.com/query',
         params: {
           interval: '5min',
           function: 'TIME_SERIES_INTRADAY',
           symbol: currticker,
           datatype: 'json',
           output_size: 'compact'
         },
         headers: {
           'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
           'x-rapidapi-key': '972939a201msh26f08ee1448b6f0p1636fdjsn29341040b234'
         }
       };
       
     axios.request(options).then(function (response) {
          setData(response.data["Time Series (5min)"]);
          dispatch(pushStock({
            stocks:data
          }));
          
      
   })
      
       .catch(function (error) {
           console.error(error);
       });

    },[currticker]);



   
 console.log(data);

 


console.log(ticker);
       


 
 
    return (

      <>
        <div className='predict'>

        <div className='predict__form'>

        <div className='predict__form-option'>

        <p className='ticker__p'>Ticker Symbol</p>
        <input className='ticker__input' type="text" placeholder="Example : MSFT" onChange={(e)=>setTicker(e.target.value)} />


        
        </div>

        <Button onClick={handleClick} style={{marginTop:"20px"}} className='fetch__button' variant="contained" color="success" size="large">
        Fetch Data
      </Button>

        
        
        </div>

       

    
            
        </div>

          { data && spin?<h1>Processing Data ...</h1>:<StockLineChart />}
        </>
    )
}

export default PredictionPage
