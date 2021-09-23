import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Cardbox from './Cardbox';

function Tickers() {

    const [company, setCompany] = useState([]);

    useEffect(()=>{

        var options = {
            method: 'GET',
            url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers',
            params: {region: 'US'},
            headers: {
              'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
              'x-rapidapi-key': '972939a201msh26f08ee1448b6f0p1636fdjsn29341040b234'
            }
          };
          
          axios.request(options).then(function (response) {
              setCompany(response.data.finance.result[0].quotes);
          }).catch(function (error) {
              console.error(error);
          });


    },[]);

   


    return (
        <div>
        <h1 style={{marginTop:"12px",marginLeft:"14px",color:"#0D7BE2"}}>Trending Stocks</h1>
        
        <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"10px",flexWrap:"wrap"}}>
       
 
        {company.map((com)=> <Cardbox  name={com.shortName} symbol ={com.symbol} market={com.market} tzone={com.exchangeTimezoneName} marketState={com.marketState}/> )}
            
        </div>
        </div>
    )
}

export default Tickers
