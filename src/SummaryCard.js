import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function SummaryCard({lbs,country,sector,city,industry,website}) {

    console.log(website)
    return (

       <>

        
         {lbs?<Card md={{ maxWidth: 400 }}>


      <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Country : {city},{country}
          </Typography>
          <Typography variant="h5" component="div">
          Sector : {sector}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
           Industry : {industry}
          </Typography>
          <Typography variant="h6">
          {lbs}
            <br />
        
          </Typography>
        </CardContent>
        <CardActions>
        <a href={website} target="_blank">Learn More</a>
        </CardActions>
      </Card>:<h2> Fetching ....</h2>}
      </>
    )
}

export default SummaryCard
