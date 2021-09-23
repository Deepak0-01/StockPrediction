import React, { useState , useEffect } from 'react';
import axios from 'axios';



function Stocks() {

   

    const [data, setData] = useState([]);

    const key = "1MT4R57J110LPQM2";

    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=RELIANCE.BSE&outputsize=full&apikey=${key}`;
   

   

   useEffect(()=>{

    axios.get(url,{
        params:{
            _limit:30
        }
    })
    .then(res=>setData(res.data))
    .catch(err=>console.log(err.message));



   },[])


 console.log(data);

   const CompanyRes = data['Meta Data'];
   console.log(CompanyRes);

   const CompanyData = data["Time Series (Daily)"]
   
    

  const splitKeyValue =  obj=>{


      if(obj)
      {

      
    const keys = Object.keys?.(obj);

    const newdata = [];

    for(let i=0;i<keys.length;i++)
    {
        newdata.push({
            "date":keys[i],
            "desc":obj[keys[i]]
        })
    }

        return newdata;

}

  
 }





 const res =   splitKeyValue(CompanyData);

 console.log(res);



   



  
    return (
        <div>

        </div>
    )
}

export default Stocks
