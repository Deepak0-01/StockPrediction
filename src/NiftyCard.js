import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function NiftyCard({symbol,iden,open,dayHigh,dayLow,lp,pc}) {
    return (

        <>
 
         
          {symbol?  <Card style={{backgroundColor:"#B5F944", color:"red"}} sx={{ minWidth: 400 ,height:300,margin:2}} raised={true}>
 
 
       <CardContent>
           <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Symbol : {symbol}
           </Typography>
           <Typography variant="h5" component="div">
          Identifier : {iden}
           </Typography>
           <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Open : {open}
           </Typography>
           <Typography sx={{ mb: 1.5 }} color="text.secondary">
          DayHigh : {dayHigh}
           </Typography>
           <Typography sx={{ mb: 1.5 }} color="text.secondary">
          DayLow : {dayLow}
           </Typography>
           <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Last Price : {lp}
           </Typography>
           <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Previous Close : {pc}
           </Typography>
           
         </CardContent>
         
       </Card>:<h2> OOps Something Went Wrong</h2>}
       </>
     )
}

export default NiftyCard
