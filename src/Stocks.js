import React, { useState , useEffect } from 'react';
import axios from 'axios';



function Stocks() {

   

    const [data, setData] = useState([]);

   

   

   useEffect(()=>{
    var options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
          interval: '5min',
          function: 'TIME_SERIES_INTRADAY',
          symbol: 'AAPL',
          datatype: 'json',
          output_size: 'compact'
        },
        headers: {
          'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
          'x-rapidapi-key': '972939a201msh26f08ee1448b6f0p1636fdjsn29341040b234'
        }
      };
      
      axios.request(options).then(function (response) {
         setData(response.data);
      }).catch(function (error) {
          console.error(error);
      });
   

    



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
        Stocks

        </div>
    )
}



export default Stocks
