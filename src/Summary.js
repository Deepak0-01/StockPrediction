import {useState, useEffect} from 'react';
import './Summary.css';

import SummaryCard from './SummaryCard';


function Summary() {
    const [summary, setSummary] = useState();
    const [company, setCompany] = useState('AMRN');

    console.log(summary);

    useEffect(()=>{

        var axios = require("axios").default;

        var options = {
          method: 'GET',
          url: 'https://yh-finance.p.rapidapi.com/stock/v2/get-summary',
          params: {symbol: company, region: 'US'},
          headers: {
            'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
            'x-rapidapi-key': '972939a201msh26f08ee1448b6f0p1636fdjsn29341040b234'
          }
        };
        
        axios.request(options).then(function (response) {
            setSummary(response.data.summaryProfile);
        }).catch(function (error) {
            console.error(error);
        });



    },[company])

  

    
    return (
        <div>
        <h1 style={{marginTop:"12px",marginLeft:"14px",color:"#0D7BE2"}}>Summary</h1>

        <input className="summary" type="text" placeholder="Type company symbol for summary eg 'AMRN'" onChange={e=>setCompany(e.target.value)}/>
        <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"12px",marginBottom:"5px" ,flexWrap:"wrap"}}>
        <SummaryCard lbs={summary?.longBusinessSummary} country={summary?.country} sector={summary?.sector} city={summary?.city} industry={summary?.industry} website={summary?.website}/>
        </div>
       
        
            
        </div>
    )
}

export default Summary
