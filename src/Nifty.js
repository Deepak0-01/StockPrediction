import React,{useState,useEffect} from 'react'
import NiftyCard from './NiftyCard';

function Nifty() {

    const [nifty, setNifty] = useState([]);
   

    useEffect(()=>{

        var axios = require("axios").default;

        var options = {
          method: 'GET',
          url: 'https://latest-stock-price.p.rapidapi.com/price',
          params: {Indices: 'NIFTY 50'},
          headers: {
            'x-rapidapi-host': 'latest-stock-price.p.rapidapi.com',
            'x-rapidapi-key': '972939a201msh26f08ee1448b6f0p1636fdjsn29341040b234'
          }
        };
        
        axios.request(options).then(function (response) {
            setNifty(response.data);
        }).catch(function (error) {
            console.error(error);
        });



    },[])
    return (
        <div>

        <h1 style={{marginTop:"12px",marginLeft:"14px",color:"#0D7BE2"}}>Nifty Top 50</h1>
     
        <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"12px",marginBottom:"5px" ,flexWrap:"wrap"}}>
       {nifty.map((item)=><NiftyCard symbol={item?.symbol} iden={item?.identifier} open={item?.open} dayHigh={item?.dayHigh} dayLow={item?.dayLow} lp={item?.lastPrice} pc={item?.previousClose}/>)}
     
       </div>
            
        </div>
    )
}

export default Nifty
