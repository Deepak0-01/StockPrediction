import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function TweetCard({tweetText,sentimentScore}) {
    console.log(tweetText);
    return (

        <>
 
         
           <Card  style={{backgroundImage:"linear-gradient(315deg, #0cbaba 0%, #380036 74%)",color:"white"}} sx={{ minWidth: 400 ,height:220,margin:2}} raised={true}>
 
 
       <CardContent style={{position:"absolute"}}>
           <Typography style={{position:"relative" ,left:"350px"}}  sx={{ fontSize:2 }} color="yellow" gutterBottom>
           <svg height="20" width ="20" >
           <circle fill="yellow" stroke="none" cx="10" cy="10" r="10">
             <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
           </circle>
         </svg>
    </Typography>
           
           <Typography style={{width:"80%"}} sx={{ mb: 1.5 }} color="white">
            {tweetText}
           </Typography>

           <Typography sx={{ mb: 1.5 }} color="white">
           Sentiment Score : {sentimentScore}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="white">
         Overall Feedback : {sentimentScore>90? <h3 style={{color:"#6FD13A"}}>"Positive 👍🏽"</h3>: <h3 style={{color:"red"}}>"Negative 👎🏽"</h3> }
         </Typography>
          
           
         </CardContent>
         
       </Card>
       </>
     )
}

export default TweetCard
