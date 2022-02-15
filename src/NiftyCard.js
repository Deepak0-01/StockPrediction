import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function NiftyCard({symbol,iden,open,dayHigh,dayLow,lp,pc}) {
    return (

        <>
 
         
          {symbol?  <Card style={{backgroundImage:"linear-gradient(315deg, #0cbaba 0%, #380036 74%)",color:"white"}} sx={{ minWidth: 400 ,height:300,margin:2}} raised={true}>
 
 
       <CardContent>
           <Typography sx={{ fontSize: 16 }} color="#0EB0B3" gutterBottom>
            Symbol : {symbol}
           </Typography>
           <Typography variant="h5" component="div" color="white">
          Identifier : {iden}
           </Typography>
           <Typography sx={{ mb: 1.5 }}  color="white">
          Open : {open}
           </Typography>
           <Typography sx={{ mb: 1.5 }} color="white">
          Day High : {dayHigh}
           </Typography>
           <Typography sx={{ mb: 1.5 }} color="white">
          Day Low : {dayLow}
           </Typography>
           <Typography sx={{ mb: 1.5 }} color="white">
          Last Price : {lp}
           </Typography>
           <Typography sx={{ mb: 1.5 }} color="white">
          Previous Close : {pc}
           </Typography>
           
         </CardContent>
         
       </Card>:<h2> OOps Something Went Wrong</h2>}
       </>
     )
}

export default NiftyCard
