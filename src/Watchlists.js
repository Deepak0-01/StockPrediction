import React, { useEffect,useState } from 'react';
import axios from 'axios';
import PortfolioCard from './PortfolioCard';

function Watchlists() {

    const [watchlist, setwatchlist] = useState([]);

    useEffect(()=>{

        var options = {
            method: 'GET',
            url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-popular-watchlists',
            headers: {
              'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
              'x-rapidapi-key': '972939a201msh26f08ee1448b6f0p1636fdjsn29341040b234'
            }
          };
          
          axios.request(options).then(function (response) {
             setwatchlist(response.data.finance.result[0].portfolios);
          }).catch(function (error) {
              console.error(error);
          });



    },[])

    
    return (
        <div>
        <h1 style={{marginTop:"12px",marginLeft:"14px",color:"#0D7BE2"}}>Popular WatchLists</h1>
   
        <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"12px",marginBottom:"5px" ,flexWrap:"wrap"}}>
       {watchlist.map((item)=><PortfolioCard img={item.backgroundImage["ios:size=medium"].url} name={item.name} desc={item.shortDescription}/>)}
       </div>
            
        </div>
    )
}

export default Watchlists
