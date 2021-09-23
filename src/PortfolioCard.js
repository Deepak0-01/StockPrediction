import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function PortfolioCard({img, name,desc}) {
    return (
        <Card sx={{ maxWidth: 340 ,height:400,margin:1}} raised={true}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="230"
         
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}

export default PortfolioCard
